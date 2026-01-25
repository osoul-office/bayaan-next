// "use client";

import clsx from "clsx";
import styles from "./sidebar-toggle-btn.module.css";
import { LuArrowLeftToLine } from "react-icons/lu";

interface SidebarToggleBtnProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

export const SidebarToggleBtn = ({
  isSidebarCollapsed,
  toggleSidebar,
}: SidebarToggleBtnProps) => {
  return (
    <button
      className={clsx(
        styles["sidebar-toggle-btn"],
        isSidebarCollapsed && styles["move-outside"],
      )}
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
    >
      <LuArrowLeftToLine
        className={clsx(isSidebarCollapsed && styles["rotate180"])}
      />
    </button>
  );
};
