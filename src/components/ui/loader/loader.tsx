import styles from "./loader.module.css";
import clsx from "clsx";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  showWrapper?: boolean;
}

export const Loader = ({
  size = "medium",
  showWrapper = true,
}: LoaderProps) => {
  const loaderSizeClass = clsx(
    size === "small" && styles["loader-small"],
    size === "medium" && styles["loader"],
    size === "large" && styles["loader-large"],
  );

  if (showWrapper) {
    return (
      <div className={styles["wrapper"]}>
        <div className={loaderSizeClass}></div>
      </div>
    );
  }

  return <div className={loaderSizeClass}></div>;
};
