import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Theme = "dark" | "light". Dark is the default.
// index.html already set data-theme before React started (no flash),
// so here we simply read it back as the starting value.

const ThemeContext = createContext(null);

function getInitialTheme() {
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Whenever the theme changes: update the page and remember the choice.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage can be blocked (private mode). The site still works.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Turn on the smooth-colour-fade class for a moment (see index.css)
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 450);
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside <ThemeProvider>");
  return context;
}
