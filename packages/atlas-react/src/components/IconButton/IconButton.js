import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./IconButton.scss";

/** A simple button containing only an icon */
export default function IconButton({faClass, onClick, isActive}) {
  const iconClasses = classNames("fa", faClass);
  const buttonClasses = classNames(
    "IconButton",
    {
    "is-active": isActive
  })
  return (
    <button className={buttonClasses} onClick={onClick}>
      <i className={iconClasses} />
    </button>
  )
}

IconButton.propTypes = {
  /** The icon class to render */
  faClass: PropTypes.string.isRequired,
  /** Click Handler */
  onClick: PropTypes.func
}
