import Link from "next/link";
import {
  LuTrendingUp,
  LuDollarSign,
  LuSquareStack,
  LuCheck,
} from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import styles from "@/styles/landing-page.module.css";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles["header"]}>
        <div className={styles["container"]}>
          <nav>
            <div className={styles["logo-container"]}>
              <Logo />
            </div>

            <ul className={styles["nav-links"]}>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#how-it-works">How It Works</Link>
              </li>
              <li className={styles["ml-auto"]}>
                <Link href="/login">Log In</Link>
              </li>
              <li>
                <Link href="/signup" className={styles["cta"]}>
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles["hero"]}>
        <div className={styles["container"]}>
          <h1>Take Control of Your Finances</h1>
          <p>Track income, expenses, and accounts in one simple place</p>
          <div className={styles["hero-btns"]}>
            <Link href="/signup" className={styles["primary-cta"]}>
              Get Started
            </Link>
            <a href="#features" className={styles["secondary-cta"]}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles["container"]}>
          <h2>Everything You Need to Manage Your Money</h2>
          <div className={styles["grid"]}>
            <div className={styles["card"]}>
              <div className={styles["icon"]}>
                <LuTrendingUp />
              </div>
              <h3>Track Income & Expenses</h3>
              <p>
                Log every transaction easily and keep track of where your
                money comes from and where it goes.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["icon"]}>
                <LuDollarSign />
              </div>
              <h3>Multiple Accounts</h3>
              <p>
                Manage all your accounts in one place - bank accounts,
                wallets, cash, and more.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["icon"]}>
                <LuSquareStack />
              </div>
              <h3>Custom Categories</h3>
              <p>
                Create categories that make sense for your spending habits
                and track each one separately.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["icon"]}>
                <LuCheck />
              </div>
              <h3>Simple & Clean</h3>
              <p>
                No clutter, no complicated features. Just a straightforward
                way to understand your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles["how-it-works"]}>
        <div className={styles["container"]}>
          <h2>Get Started in Minutes</h2>
          <div className={styles["steps-grid"]}>
            <div className={styles["step"]}>
              <div className={styles["step-number"]}>1</div>
              <h3>Create Your Account</h3>
              <p>
                Sign up in seconds with just your email. No complicated
                setup required.
              </p>
            </div>
            <div className={styles["step"]}>
              <div className={styles["step-number"]}>2</div>
              <h3>Add Your Accounts</h3>
              <p>
                Link your bank accounts or manually add your cash balances
                and credit cards.
              </p>
            </div>
            <div className={styles["step"]}>
              <div className={styles["step-number"]}>3</div>
              <h3>Start Tracking</h3>
              <p>
                Begin logging your transactions and watch your financial
                clarity improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles["cta-banner"]}>
        <div className={styles["container"]}>
          <h2>Ready to take control of your finances?</h2>
          <p>
            Join thousands of users who have simplified their financial
            management.
          </p>
          <Link href="/signup" className={styles["cta-btn"]}>
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles["footer"]}>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={styles["brand"]}>
              <Logo isLink={false} />
              <p>
                A simple finance tracker to help you understand and manage
                your money.
              </p>
            </div>
            <div className={styles["column"]}>
              <h4>Product</h4>
              <ul>
                <li>
                  <Link href="#features">Features</Link>
                </li>
                <li>
                  <Link href="#how-it-works">How It Works</Link>
                </li>
                <li>
                  <Link href="/signup">Get Started</Link>
                </li>
              </ul>
            </div>
            <div className={styles["column"]}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className={styles["column"]}>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["bottom"]}>
            <p>
              &copy; {new Date().getFullYear()} Bayaan. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
