'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';
type Resolved = 'dark' | 'light';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  resolvedTheme: Resolved;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

const isTheme = (v: unknown): v is Theme =>
  v === 'dark' || v === 'light' || v === 'system';

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'rj-ui-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    const stored = window.localStorage.getItem(storageKey);
    return isTheme(stored) ? stored : defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<Resolved>('light');

  // Apply the class to <html> and keep resolvedTheme in sync. When the user
  // is in 'system' mode, also listen for live OS theme changes.
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = () => {
      const next: Resolved =
        theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
      root.classList.remove('light', 'dark');
      root.classList.add(next);
      setResolvedTheme(next);
    };

    apply();

    if (theme !== 'system') return;
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  const setTheme = (next: Theme) => {
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // localStorage may be unavailable (private mode, quota) — ignore
    }
    setThemeState(next);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};
