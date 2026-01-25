import styles from "./sidebar-theme-btn.module.css";
import { LuSun, LuMoon } from "react-icons/lu";

interface SidebarThemeBtnProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const SidebarThemeBtn = ({
  isDark,
  toggleTheme,
}: SidebarThemeBtnProps) => {
  return (
    <button className={styles["theme-toggle-btn"]} onClick={toggleTheme}>
      {isDark ? <LuSun /> : <LuMoon />}
      <span>{isDark ? "light" : "dark"} mode</span>
    </button>
  );
};
