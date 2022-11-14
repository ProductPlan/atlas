import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./BasicButton.scss";

const buttonHtmlTypes = ["button", "submit", "reset"];
export const buttonVariants = ["default", "secondary", "ghost"];

/** A Basic Button */
export default function BasicButton({
  label,
  htmlForm,
  htmlType = "button",
  type = "default",
  onClick,
  trailingIcon,
  leadingIcon,
}) {
  const classes = classNames(styles.BasicButton, {
    [styles[`BasicButton--${type}`]]: true,
  });

  return (
    <button
      className={classes}
      type={htmlType}
      form={htmlForm}
      onClick={onClick}
    >
      {leadingIcon ? (
        <span className={styles.BasicButtonLeadingIcon}>{leadingIcon}</span>
      ) : null}
      {label}
      {trailingIcon ? (
        <span className={styles.BasicButtonTrailingIcon}>{trailingIcon}</span>
      ) : null}
    </button>
  );
}

BasicButton.propTypes = {
  /** Text to display in the button */
  label: PropTypes.string.isRequired,
  /** Optional: what form on the page should this button be attached to */
  htmlForm: PropTypes.string,
  /** html type attribute, one of button, submit, or reset */
  htmlType: PropTypes.oneOf(buttonHtmlTypes),
  /** html id attribute */
  htmlId: PropTypes.string.isRequired,
  /** one of default, secondary, ghost */
  type: PropTypes.oneOf(buttonVariants),
  /** Click Handler */
  onClick: PropTypes.func,
  /** icon to display to the right of the label */
  trailingIcon: PropTypes.element,
  /** icon to display to the left of the label */
  leadingIcon: PropTypes.element,
};
