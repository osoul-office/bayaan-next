/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";

export const UIContext = createContext({
  isDark: false,
  isSidebarCollapsed: false,
  toggleTheme: () => {},
  toggleSidebar: () => {},
});

export const UIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldBeDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);

    const storedSidebar = localStorage.getItem("sidebar");
    const shouldBeCollapsed = storedSidebar === "collapsed";

    setIsDark(shouldBeDark);
    setIsSidebarCollapsed(shouldBeCollapsed);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      "sidebar",
      isSidebarCollapsed ? "collapsed" : "open",
    );
  }, [isSidebarCollapsed, mounted]);

  const value = useMemo(
    () => ({
      isDark,
      isSidebarCollapsed,
      toggleTheme: () => setIsDark((prev) => !prev),
      toggleSidebar: () => setIsSidebarCollapsed((prev) => !prev),
    }),
    [isDark, isSidebarCollapsed],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => useContext(UIContext);
