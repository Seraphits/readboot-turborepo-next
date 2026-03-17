import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import React from 'react';
import '../../../packages/ui/src/patterns/globals.scss';

/** Self-destruct: unregister ghost service workers and wipe caches every load (dev). */
function ServiceWorkerClearDecorator(Story: React.ComponentType) {
  React.useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
        console.log('Successfully unregistered ghost Service Worker');
      }
    });
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
          console.log(`Deleted cache: ${name}`);
        }
      });
    }
  }, []);
  return <Story />;
}

const preview: Preview = {
  decorators: [
    ServiceWorkerClearDecorator,
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
