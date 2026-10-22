import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';

/**
 * Theme toggle button. Uses lucide icons (no brand icons needed here).
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
