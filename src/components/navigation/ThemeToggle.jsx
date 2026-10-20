import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext";

// Icon-only button, so it needs an aria-label (for screen readers)
// and a title (the tooltip you see on hover).
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition duration-300 hover:border-accent hover:text-accent"
    >
      {/* Show the icon of the theme you will switch TO */}
      {isDark ? (
        <LuSun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <LuMoon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
}
