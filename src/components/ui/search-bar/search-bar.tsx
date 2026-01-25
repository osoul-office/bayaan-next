import styles from "./search-bar.module.css";
import { LuSearch, LuBellDot } from "react-icons/lu";

export const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <LuSearch className={styles["search-icon"]} />
      <input
        type="text"
        name="search"
        aria-label="search"
        placeholder="Search ..."
      />
      <LuBellDot className={styles["bell-icon"]} />
    </div>
  );
};
