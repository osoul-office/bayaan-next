/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import styles from "./sidebar-theme-btn.module.css";
import { LuSun, LuMoon, LuSunMoon } from "react-icons/lu";
import { useEffect, useState } from "react";

interface SidebarThemeBtnProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const SidebarThemeBtn = ({
  isDark,
  toggleTheme,
}: SidebarThemeBtnProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={styles["theme-toggle-btn"]} onClick={toggleTheme}>
        <LuSunMoon />
        <span>theme</span>
      </button>
    );
  }

  return (
    <button className={styles["theme-toggle-btn"]} onClick={toggleTheme}>
      {isDark ? <LuSun /> : <LuMoon />}
      <span>{isDark ? "light" : "dark"} theme</span>
    </button>
  );
};
