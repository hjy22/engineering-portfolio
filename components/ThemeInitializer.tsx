"use client";

import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    if (window.localStorage.getItem("portfolio-theme") === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, []);

  return null;
}
