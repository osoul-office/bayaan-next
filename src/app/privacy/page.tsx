import Link from "next/link";
import styles from "@/styles/static-pages.module.css";

export const metadata = {
  title: "Privacy Policy | Bayaan",
  description: "Bayaan Privacy Policy - How we protect your data",
};

export default function PrivacyPage() {
  return (
    <main className={styles["page"]}>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          <h1>Privacy Policy</h1>
          <p>Last updated: February 2026</p>
        </header>
        <div className={styles["content"]}>
          <p>
            At Bayaan, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal
            information.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when
            you create an account, add transactions, or contact us for
            support.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and
            improve our services. This includes processing your
            transactions, sending you updates, and providing customer
            support.
          </p>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your
            personal information from unauthorized access, alteration, or
            disclosure.
          </p>
          <h2>Your Rights</h2>
          <ul>
            <li>
              You can access and update your account information at any
              time
            </li>
            <li>
              You can request deletion of your account and associated data
            </li>
            <li>You can export your data at any time</li>
          </ul>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at{" "}
            <a href="mailto:ammarelbadry1@gmail.com">
              ammarelbadry1@gmail.com
            </a>
            .
          </p>
        </div>
        <footer className={styles["footer"]}>
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
