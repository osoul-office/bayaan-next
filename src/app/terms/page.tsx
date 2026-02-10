import Link from "next/link";
import styles from "@/styles/static-pages.module.css";

export const metadata = {
  title: "Terms of Service | Bayaan",
  description:
    "Bayaan Terms of Service - Terms and conditions for using our services",
};

export default function TermsPage() {
  return (
    <main className={styles["page"]}>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          <h1>Terms of Service</h1>
          <p>Last updated: February 2026</p>
        </header>
        <div className={styles["content"]}>
          <p>
            By accessing and using Bayaan, you accept and agree to be bound
            by the terms and provisions of this agreement.
          </p>
          <h2>Use of Services</h2>
          <p>
            Bayaan provides a personal finance tracking service. You agree
            to use our services only for lawful purposes and in accordance
            with these Terms.
          </p>
          <h2>Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under
            your account.
          </p>
          <h2>User Content</h2>
          <p>
            You retain ownership of all data you enter into Bayaan. We do
            not claim ownership of your financial information.
          </p>
          <h2>Disclaimers</h2>
          <p>
            Bayaan is provided &quot;as is&quot; without any warranties,
            expressed or implied. We do not provide financial advice.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            Bayaan shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of our services.
          </p>
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time.
            Continued use of Bayaan after any changes constitutes
            acceptance of the new Terms.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us
            at{" "}
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
