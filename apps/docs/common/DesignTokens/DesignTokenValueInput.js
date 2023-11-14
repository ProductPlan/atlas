import styles from "./DesignTokens.module.scss";
import React from 'react';

const DesignTokenValueInput = ({ value }) => {
  return (
    <input
      className={styles.DesignToken__CellTokenInput}
      onFocus={(e) => e.currentTarget.select()}
      value={value}
      readOnly
    />
  );
};

export default DesignTokenValueInput;
