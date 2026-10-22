import { useState, useEffect, useCallback } from 'react';

/**
 * Theme hook.
 * - Defaults to system preference.
 * - Persists choice in localStorage (wrapped in try/catch).
 * - Toggles the `dark` class on <html>.
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {
      // ignore
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
