'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from './theme-provider';

// `true` only after the component has hydrated on the client. Used to gate
// rendering the theme-specific icon, since the server doesn't know which
// theme the user has stored in localStorage.
const emptySubscribe = () => () => {};
const useHasMounted = () =>
  useSyncExternalStore(emptySubscribe, () => true, () => false);

const NEXT: Record<'light' | 'dark' | 'system', 'light' | 'dark' | 'system'> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
};

const LABEL: Record<'light' | 'dark' | 'system', string> = {
  light: 'Light theme',
  dark: 'Dark theme',
  system: 'System theme',
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SystemIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const ModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  const label = mounted ? `${LABEL[theme]} (click to change)` : 'Theme';

  return (
    <button
      type="button"
      className="mode-toggle"
      aria-label={label}
      title={label}
      onClick={() => setTheme(NEXT[theme])}
    >
      <span className="mode-toggle-icon" aria-hidden="true">
        {!mounted ? <SystemIcon /> : theme === 'light' ? <SunIcon /> : theme === 'dark' ? <MoonIcon /> : <SystemIcon />}
      </span>
    </button>
  );
};

export default ModeToggle;
