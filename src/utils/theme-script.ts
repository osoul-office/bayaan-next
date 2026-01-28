/**
 * Theme detection script for SSR/SSG to prevent flash on load
 * This script runs before React hydration to set the correct theme immediately
 */

export function getThemeScript() {
  return `(function() {
    function getTheme() {
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') {
          return storedTheme;
        }
      }
      
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      return 'light';
    }
    
    const theme = getTheme();
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  })();`;
}

export const themeScriptContent = getThemeScript();
