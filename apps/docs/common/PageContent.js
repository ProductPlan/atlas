import PropTypes from "prop-types";

import styles from "./PageContent.module.scss";

const PageContent = ({ title, subtitle, children }) => {
  return (
    <div className={styles.Page}>
      <div className={styles.PageContent}>
        <h1 className={styles.PageHeading}>{title}</h1>
        <p className={styles.PageSubcopy}>{subtitle}</p>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageContent;
