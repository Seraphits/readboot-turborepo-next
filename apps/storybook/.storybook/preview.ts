import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import React from "react";
import "../../../packages/ui/src/patterns/globals.scss";

/** Self-destruct: unregister ghost service workers and wipe caches every load (dev). */
function ServiceWorkerClearDecorator(Story: React.ComponentType) {
  React.useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator))
      return;
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
        console.log("Successfully unregistered ghost Service Worker");
      }
    });
    if ("caches" in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
          console.log(`Deleted cache: ${name}`);
        }
      });
    }
  }, []);
  return React.createElement(Story);
}

const preview: Preview = {
  decorators: [
    ServiceWorkerClearDecorator,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms", "Templates"],
        method: "alphabetical",
      },
    },

    a11y: {
      // Solo portfolio: treat violations as errors in the addon (fix as you go).
      test: "error",
    },
  },
};

export default preview;
