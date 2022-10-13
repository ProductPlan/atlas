import Link from "next/link";

import styles from "./main.module.scss";

export default function Docs() {
  return (
    <div className={styles.Page}>
      <h1 className={styles.PageHeading}>Welcome to 🌐 Atlas</h1>

      <p className={styles.PageSubcopy}>
        Start inspecting the components from the sidebar.
      </p>
    </div>
  );
}
