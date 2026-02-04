import styles from "./app-layout.module.css";
import { Sidebar, SearchBar, UserProfile, Toaster } from "@/components/ui";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles["layout"]}>
      <Sidebar />
      <section className={styles["body"]}>
        <header>
          <SearchBar />
          <UserProfile
            username="username123"
            email="placeholder@example.foo"
          />
        </header>
        <main>{children}</main>
      </section>
      <Toaster
        id="portal"
        position="bottom-right"
        swipeDirections={["bottom", "right"]}
        visibleToasts={5}
      />
    </section>
  );
}
