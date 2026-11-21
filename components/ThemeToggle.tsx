"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle({ className }: { className: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (window.localStorage.getItem("portfolio-theme") === "dark") {
      setTheme("dark");
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
