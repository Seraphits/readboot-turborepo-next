# Framework SCSS (global)

This folder holds **site-wide** styles: rules that apply **without** a component import tree—element selectors (`html`, `h1`–`h6`, `footer`), theme pairing, and (when you add them) shared utility classes meant to be reused everywhere.

## Entry point

Apps load the framework **once** via:

`import "@repo/ui/patterns/globals.scss"`

(`globals.scss` lives next to this folder and `@use`s partials from here.)

## What does *not* belong here

- **Component-isolated** styling → colocate `ComponentName.module.scss` with the React component under `Atoms/`, `Molecules/`, `Organisms/`, or `Templates/`.
- **Design tokens** (Sass variables, mixins) stay under `patterns/Atoms/**`; framework and modules both `@use` those as needed.

## Quick rule

| Kind | Where |
|------|--------|
| Global cascade, no hashed class | `Framework/` + `globals.scss` |
| Scoped to one component | `*.module.scss` beside the component |
