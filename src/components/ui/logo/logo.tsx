import styles from "./logo.module.css";
import Link from "next/link";
import { LuWallet } from "react-icons/lu";
import { paths } from "@/config/paths";

export const Logo = ({ href = paths.home.getHref(), isLink = true }) => {
  if (isLink) {
    return (
      <Link href={href} className={styles["logo"]}>
        <LuWallet />
        <span>Bayaan</span>
      </Link>
    );
  }

  return (
    <div className={styles["logo"]}>
      <LuWallet />
      <span>Bayaan</span>
    </div>
  );
};
