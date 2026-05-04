import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

import "./Button.scss";

export type ButtonVariant =
  | "action-on-light"
  /** Paper fill, charcoal border, ink text — Futurist Carton secondary CTA */
  | "outline-on-light"
  | "ink-dark-on-paper-light"
  | "alert";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
  "aria-label"?: string; // Explicit accessibility support
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "action-on-light", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx("button", `button--${variant}`, className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
