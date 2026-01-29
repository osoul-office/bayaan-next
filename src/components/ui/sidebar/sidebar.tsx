"use client";

import clsx from "clsx";
import styles from "./sidebar.module.css";
import {
  LuLayoutDashboard,
  LuSquareStack,
  LuTrendingUp,
  LuDollarSign,
  LuNotepadText,
} from "react-icons/lu";
import { useUIContext } from "@/providers";
import {
  Logo,
  SidebarToggleBtn,
  SidebarNavLink,
  SidebarSubNav,
  SidebarThemeBtn,
  type SidebarNavLinkProps,
} from "@/components/ui";
import { paths } from "@/config/paths";

const navigationLinks: SidebarNavLinkProps[] = [
  {
    href: paths.portal.dashboard.getHref(),
    label: "Dashboard",
    Icon: LuLayoutDashboard,
  },
  {
    href: paths.portal.accounts.getHref(),
    label: "Accounts",
    Icon: LuDollarSign,
  },
  {
    href: paths.portal.revenues.getHref(),
    label: "Revenues",
    Icon: LuTrendingUp,
  },
  {
    href: paths.portal.expenses.getHref(),
    label: "Expenses",
    Icon: LuNotepadText,
  },
];

const subNavigationLinks: SidebarNavLinkProps[] = [
  {
    href: paths.portal.revenueCategories.getHref(),
    label: "Revenue Categories",
    Icon: () => <></>,
  },
  {
    href: paths.portal.expenseCategories.getHref(),
    label: "Expense Categories",
    Icon: () => <></>,
  },
];

export const Sidebar = () => {
  const { isDark, isSidebarCollapsed, toggleTheme, toggleSidebar } =
    useUIContext();
  return (
    <aside
      className={clsx(
        styles["sidebar"],
        isSidebarCollapsed && styles["closed"],
      )}
    >
      <SidebarToggleBtn
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div className={styles["logo-wrapper"]}>
        <Logo href={paths.home.getHref()} />
      </div>
      <nav className={styles["nav"]}>
        {navigationLinks.map((link) => (
          <SidebarNavLink
            key={link.label}
            href={link.href}
            label={link.label}
            Icon={link.Icon}
          />
        ))}
        <SidebarSubNav
          label="Categories"
          Icon={LuSquareStack}
          links={subNavigationLinks}
        />
      </nav>
      <SidebarThemeBtn isDark={isDark} toggleTheme={toggleTheme} />
    </aside>
  );
};
