import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

function runNoMatchCheck({ name, command, hint }) {
  try {
    execSync(command, { stdio: 'pipe' });
    process.stderr.write(`FAIL: ${name}\n`);
    process.stderr.write('Found disallowed matches.\n');
    if (hint) process.stderr.write(`Hint: ${hint}\n`);
    return false;
  } catch (error) {
    // rg exits with code 1 when no matches are found (desired state).
    if (error.status === 1) {
      process.stdout.write(`PASS: ${name}\n`);
      return true;
    }
    process.stderr.write(`FAIL: ${name}\n`);
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`.trim();
    if (output) process.stderr.write(`${output}\n`);
    if (hint) process.stderr.write(`Hint: ${hint}\n`);
    return false;
  }
}

const forbiddenTokenProxy = 'packages/ui/src/tokens.scss';
if (existsSync(forbiddenTokenProxy)) {
  process.stderr.write('FAIL: Forbidden token proxy file exists.\n');
  process.stderr.write(
    `Remove ${forbiddenTokenProxy} and use @use "Tokens" / Tokens/_index.scss only (see readboot-scss-architecture.mdc).\n`,
  );
  process.exit(1);
}

const checks = [
  {
    name: 'No inline styles in web/trappsystems/readboot app TSX',
    command:
      "rg \"style=\\\\{\\\\{\" apps/web apps/trappsystems apps/readboot --glob '*.tsx' --glob '!apps/storybook/**'",
    hint: 'Move inline styles into SCSS Modules.',
  },
  {
    name: 'No "../tokens" SCSS import (removed proxy; use @use "Tokens")',
    command: "rg -F '../tokens' packages/ui --glob '*.scss'",
    hint: 'Use @use "Tokens" as * (or partial @use "Tokens/…") with load path packages/ui/src.',
  },
  {
    name: 'No deep internal package imports',
    command:
      "rg \"@repo/[^\\\"'\\\\s]+/src/\" apps packages --glob '*.{ts,tsx}'",
    hint: "Import from public package entrypoints only (e.g. @repo/ui/atoms).",
  },
  {
    name: 'No retired legacy docs components in app routes',
    command:
      "rg \"\\b(MediaMockup|CaptureForm|Masthead|ColorScheme|COLOR_SCHEME_NAMES|ColorSchemeName)\\b\" apps --glob '*.tsx'",
    hint: 'Use current component set and Storybook portable stories.',
  },
];

const passedCount = checks.filter((check) => runNoMatchCheck(check)).length;
const passed = passedCount === checks.length;

if (!passed) {
  process.exit(1);
}

process.stdout.write('All guardrail checks passed.\n');
