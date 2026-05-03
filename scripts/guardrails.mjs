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

const checks = [
  {
    name: 'No inline styles in web/docs/trappsystems/readboot app TSX',
    command:
      "rg \"style=\\\\{\\\\{\" apps/web apps/docs apps/trappsystems apps/readboot --glob '*.tsx' --glob '!apps/storybook/**'",
    hint: 'Move inline styles into SCSS Modules.',
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
