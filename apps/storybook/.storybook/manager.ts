import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

/** Manager shell (sidebar chrome). Canvas fonts/CSS still come from preview.ts + preview-head.html. */
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "ReadBoot",
    brandImage: "/assets/branding/readboot-logo.png",
    brandTarget: "_self",
  }),
  /** Avoid all-caps “root” treatment for `titlePrefix` groups (show “Framework”, not “FRAMEWORK”). */
  sidebar: {
    showRoots: false,
  },
});
