import Link from "next/link";
import styles from "@/styles/contact-page.module.css";

export const metadata = {
  title: "Contact | Bayaan",
  description: "Get in touch with the Bayaan team",
};

export default function ContactPage() {
  return (
    <main className={styles["page"]}>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          <h1>Contact Us</h1>
          <p>
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </header>
        <div className={styles["content"]}>
          <div className={styles["contact-info"]}>
            <h2>Get in Touch</h2>
            <div className={styles["contact-item"]}>
              <span className={styles["contact-label"]}>Email:</span>
              <span className={styles["contact-value"]}>
                ammarelbadry1@gmail.com
              </span>
            </div>
            <div className={styles["contact-item"]}>
              <span className={styles["contact-label"]}>Response:</span>
              <span className={styles["contact-value"]}>
                Within 24-48 hours
              </span>
            </div>
          </div>
          <form
            className={styles["contact-form"]}
            action="#"
            method="POST"
          >
            <div className={styles["form-group"]}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>
            <button type="submit" className={styles["submit-btn"]}>
              Send Message
            </button>
          </form>
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
