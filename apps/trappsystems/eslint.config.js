import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@repo/*/src/*"],
          paths: [
            {
              name: "@repo/ui/atoms",
              message:
                "Greenfield site: do not import legacy patterns barrel. Use @repo/ui/sites + @repo/ui/framework, or add exports under packages/ui/src/Framework/.",
            },
            {
              name: "@repo/ui/molecules",
              message:
                "Greenfield site: do not import legacy patterns barrel. Use @repo/ui/sites + @repo/ui/framework, or add exports under packages/ui/src/Framework/.",
            },
            {
              name: "@repo/ui/organisms",
              message:
                "Greenfield site: use @repo/ui/sites for shell components (avoids loading patterns/Organisms/index). Legacy apps may still use organisms.",
            },
            {
              name: "@repo/ui/templates",
              message:
                "Greenfield site: templates resolve to patterns/. Prefer Framework/sites or new exports from packages/ui.",
            },
            {
              name: "@repo/ui/patterns",
              message:
                "Greenfield site: never import @repo/ui/patterns/* from readboot/trappsystems.",
            },
          ],
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='style']",
          message:
            "Inline styles are disallowed in app code. Prefer a stylesheet when you add the Trappsystems design system.",
        },
      ],
    },
  },
];
