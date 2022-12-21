import React from "react";
import PropTypes from "prop-types";
import "./BasicButton.scss";

const buttonHtmlTypes = ["button", "submit", "reset"];
export const buttonVariants = [
  "default",
  "secondary",
  "tertiary",
  "ghost",
  "destructive",
];
export const buttonSizes = ["default", "small", "mini", "full-width"];
export const buttonAlignments = ["left", "center", "right"];

/** A Basic Button */
export default function BasicButton({
  label,
  htmlId,
  onClick,
  align = "center",
  disabled = undefined,
  htmlType = "button",
  leadingIcon = null,
  size = "default",
  trailingIcon = null,
  type = "default",
}) {
  return (
    <button
      className={`BasicButton BasicButton--${type} BasicButton--size-${size} BasicButton--align-${align}`}
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      id={htmlId}
    >
      {leadingIcon && <span className="leadingIcon">{leadingIcon}</span>}
      {label}
      {trailingIcon && <span className="trailingIcon">{trailingIcon}</span>}
    </button>
  );
}

BasicButton.propTypes = {
  /** Button content alignment (left, center, right) */
  align: PropTypes.oneOf(buttonAlignments),
  /** The button is disabled or not */
  disabled: PropTypes.bool,
  /** Text to display in the button */
  label: PropTypes.string.isRequired,
  /** html type attribute, one of button, submit, or reset */
  htmlType: PropTypes.oneOf(buttonHtmlTypes),
  /** html id attribute */
  htmlId: PropTypes.string,
  /** one of default, secondary, tertiary, destructive, ghost */
  type: PropTypes.oneOf(buttonVariants),
  /** Click Handler */
  onClick: PropTypes.func,
  /** button size (default, small, mini, full-width) */
  size: PropTypes.oneOf(buttonSizes),
  /** icon to display to the right of the label */
  trailingIcon: PropTypes.element,
  /** icon to display to the left of the label */
  leadingIcon: PropTypes.element,
};
