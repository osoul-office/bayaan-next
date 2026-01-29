"use client";

import styles from "./sidebar-sub-nav.module.css";
import clsx from "clsx";
import type { SidebarNavLinkProps } from "@/components/ui";
import { SidebarNavLink } from "@/components/ui";
import { usePathname } from "next/navigation";
import { useState, useRef, useLayoutEffect } from "react";
import { LuChevronDown } from "react-icons/lu";

interface SidebarSubNavProps {
  label: string;
  Icon: React.ComponentType;
  links: SidebarNavLinkProps[];
}

export const SidebarSubNav = ({
  label,
  Icon,
  links,
}: SidebarSubNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(50);
  const containerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const matchesPath = links.some((link) => pathname.includes(link.href));

  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    } else {
      setHeight(50);
    }
  }, [isOpen]);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <section
      ref={containerRef}
      className={clsx(styles["sub-nav"], matchesPath && styles["active"])}
      style={{
        height: `${height}px`,
      }}
    >
      <header onClick={handleClick}>
        <span className={styles["icon"]}>
          <Icon />
        </span>
        <span>{label}</span>
        <span className={clsx(styles["arrow"], isOpen && styles["flip"])}>
          <LuChevronDown />
        </span>
      </header>
      {links.map((link) => (
        <SidebarNavLink
          key={link.label}
          href={link.href}
          label={link.label}
          Icon={link.Icon}
        />
      ))}
    </section>
  );
};
