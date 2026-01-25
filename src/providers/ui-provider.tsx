"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import { Loader } from "@/components/ui";

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
  const [isDark, setIsDark] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const storedSidebar = localStorage.getItem("sidebar");

    const shouldBeDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);
    const shouldBeCollapsed = storedSidebar === "collapsed";

    if (shouldBeDark) {
      setIsDark(true);
    }
    if (shouldBeCollapsed) {
      setIsSidebarCollapsed(true);
    }

    setMounted(true);
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

  if (!mounted) return <Loader />;

  return <Loader />;
  // return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => useContext(UIContext);
