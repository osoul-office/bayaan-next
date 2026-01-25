import styles from "./user-profile.module.css";
import Image from "next/image";
import { LuEllipsis } from "react-icons/lu";

interface UserProfileProps {
  username: string;
  email: string;
}

export const UserProfile = ({ username, email }: UserProfileProps) => {
  return (
    <div className={styles["user-profile"]}>
      <Image
        className={styles["avatar"]}
        src="/avatar.svg"
        alt="User Avatar"
        width={40}
        height={40}
        priority
      />
      <div>
        <span className={styles["username"]}>{username}</span>
        <span className={styles["email"]}>{email}</span>
      </div>
      <button className={styles["modal-btn"]}>
        <LuEllipsis />
      </button>
    </div>
  );
};
