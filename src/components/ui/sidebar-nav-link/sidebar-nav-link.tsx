"use client";

import clsx from "clsx";
import styles from "./sidebar-nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarNavLinkProps {
  href: string;
  label: string;
  Icon: React.ComponentType;
}

export const SidebarNavLink = ({
  href,
  label,
  Icon,
}: SidebarNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={clsx(styles["nav-link"], isActive && styles["active"])}
    >
      <span className={styles["icon"]}>
        <Icon />
      </span>
      <span>{label}</span>
    </Link>
  );
};
