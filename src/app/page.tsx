import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles["page"]}>
      <Link href="/portal/dashboard" className={styles["link"]}>
        Dashboard
      </Link>
    </section>
  );
}
