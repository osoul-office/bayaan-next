import styles from "./actions.module.css";
import Link from "next/link";
import {
  LuCloudDownload,
  LuCloudUpload,
  LuFilter,
  LuPlus,
  LuRotateCw,
  LuTrash,
} from "react-icons/lu";

interface ActionsProps {
  create: string;
}

export const Actions = ({ create }: ActionsProps) => {
  return (
    <section className={styles["actions"]}>
      <div>
        <button>
          <LuFilter />
          Filter
        </button>
      </div>
      <div>
        <button className={styles["danger"]}>
          <LuTrash />
          Delete
        </button>
        <button>
          <LuRotateCw /> Refresh
        </button>
        <button>
          <LuCloudUpload /> Import
        </button>
        <button>
          <LuCloudDownload /> Export
        </button>
        <Link href={create} className={styles["cta"]}>
          <LuPlus /> Add new
        </Link>
      </div>
    </section>
  );
};
