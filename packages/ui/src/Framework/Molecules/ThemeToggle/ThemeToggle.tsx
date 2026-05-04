"use client";

import { useCallback } from "react";

import "./theme-toggle.scss";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
  }, []);

  return (
    <button
      type="button"
      className="ThemeToggle"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
    >
      ☀️ / 🌙
    </button>
  );
};
