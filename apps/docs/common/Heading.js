import Link from "next/link";

import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={styles.Heading}>
      <Link href="/">🌐 ProductPlan Atlas</Link>
    </div>
  );
};

export default Heading;
