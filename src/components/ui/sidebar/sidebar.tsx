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
    href: paths.portal.account.getHref(),
    label: "Accounts",
    Icon: LuDollarSign,
  },
  {
    href: paths.portal.revenue.getHref(),
    label: "Revenue",
    Icon: LuTrendingUp,
  },
  {
    href: paths.portal.expense.getHref(),
    label: "Expense",
    Icon: LuNotepadText,
  },
];

const subNavigationLinks: SidebarNavLinkProps[] = [
  {
    href: paths.portal.revenueCategory.getHref(),
    label: "Revenue Category",
    Icon: () => <></>,
  },
  {
    href: paths.portal.expenseCategory.getHref(),
    label: "Expense Category",
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
