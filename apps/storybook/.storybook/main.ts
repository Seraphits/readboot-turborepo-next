import type { StorybookConfig } from '@storybook/react-vite';

import { dirname } from "path";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../..");
const packagesUiSrc = path.join(projectRoot, "packages/ui/src");

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    `${packagesUiSrc}/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ],
  addons: [
    ...(process.env.CHROMATIC_PROJECT_TOKEN
      ? [getAbsolutePath('@chromatic-com/storybook')]
      : []),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  staticDirs: ["../public"],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const packagesUiSrc = path.join(projectRoot, 'packages/ui/src');
    const packagesWpUtilsSrc = path.join(projectRoot, 'packages/wp-utils/src');
    return mergeConfig(config, {
      define: {
        // Next.js internals (link, has-base-path) expect process.env in browser
        'process.env': JSON.stringify({}),
      },
      resolve: {
        alias: {
          'next/image': path.resolve(__dirname, 'next-image-mock.tsx'),
          'next/link': path.resolve(__dirname, 'next-link-mock.tsx'),
          'next/navigation': path.resolve(__dirname, 'next-navigation-mock.ts'),
          '@repo/ui': path.join(packagesUiSrc, 'index.tsx'),
          '@repo/ui/*': packagesUiSrc + '/',
          '@repo/wp-utils': path.join(packagesWpUtilsSrc, 'index.ts'),
          '@repo/wp-utils/*': packagesWpUtilsSrc + '/',
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [path.join(packagesUiSrc, "patterns/Atoms")],
          },
        },
      },
    });
  },
};

export default config;
