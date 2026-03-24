# Backlog index (ReadBoot)

This repo uses **markdown in the repository** as the durable plan and checklist, and **GitHub Issues** for active work (assignees, milestones, PR links). New work that maps to a checklist should reference the doc path and section in the issue body.

## Workflow

| Layer | Role |
|--------|------|
| **Markdown** | Phases, exit criteria, file paths, and history—reviewed in PRs and versioned with the branch. |
| **GitHub Issues** | Who is doing what now, discussion, and closing work; each issue should **point to** a markdown section so the two stay aligned. |
| **PRs** | When you complete an item, update the relevant markdown checklist (`[ ]` → `[x]`) in the same or a follow-up PR. |

Use the **Backlog item** template when opening an issue so the backlog reference stays explicit.

## Backlog and planning documents

| Document | Contents |
|----------|----------|
| [apps/storybook/STORYBOOK_BACKLOG.md](../apps/storybook/STORYBOOK_BACKLOG.md) | Storybook: fix stories, deepen coverage, new stories (Phases 1–4). |
| [.cursor/memory/progress.md](../.cursor/memory/progress.md) | Short-lived session progress and cross-links (Cursor-oriented). |
| [apps/web/HOMEPAGE_CONTENT.md](../apps/web/HOMEPAGE_CONTENT.md) | Web homepage copy and where to edit defaults (not a sprint backlog). |

Add new domain backlogs under `docs/` or next to the app/package they concern, and add a row here.

## Deferred / follow-ups

- [ ] **Gemini + repo access** — Decide how you want Gemini to see this monorepo (e.g. IDE with workspace integration vs AI Studio uploads vs enterprise/GitHub connector). Document the chosen approach in this file or `.cursor/memory/` when done.

## Rules of reference

- Storybook structure and sidebar: `.cursor/rules/storybook.mdc`
- Monorepo tasks and `pnpm`: `.cursor/rules/monorepo.mdc`
- UI imports and `WPContent`: `.cursor/rules/linking-standards.mdc`

## AI assistants (Cursor, Gemini in IDE, etc.)

Anything that can **read files in this workspace** can read and suggest edits to these markdown files the same way as any other source file. There is no separate “backlog API”—**point the tool at `docs/BACKLOG.md` or the linked paths** (or `@`-mention the file in Cursor). Models do **not** automatically see **GitHub Issues** unless your workflow pulls them in (browser, MCP, paste, or an integration). For issues, paste the issue URL or body into the chat, or rely on the markdown checklist as the repo-local source of truth.

---

*Prefer one index file (`docs/BACKLOG.md`) so agents and humans have a single entry point.*
