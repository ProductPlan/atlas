import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BasicButton from "@components/BasicButton";
import "./AtlasBanner.scss";

const bannerTypes = ["information", "warning", "destructive", "success"];
/** A banner which appears on load of a page and rests at the top of the page. They can be dismissible by clicking the close icon, or disappear after a certain duration. */
export default function AtlasBanner({
  type = "information",
  isDismissable,
  title,
  label = null,
  handleClick,
  timeout,
  leadingIcon,
  trailingIcon,
  handleClose
}) {
  const [isOpen, setIsOpen] = useState(true);
  const classes = classNames("AtlasBanner", {
    [`AtlasBanner--${type}`]: true,
    "AtlasBanner--dismissable": isDismissable,
    "AtlasBanner--button": label,
  });

  useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        setIsOpen(false);
      }, timeout);
    }
  }, []);

  const handleCloseBanner = () => {
    handleClose()
    setIsOpen(false)
  }

  if(!isOpen){
    return
  }
  return (
    <div className={classes}>
      <div className="AtlasBanner__content">
        {leadingIcon}
        {title && <div className="AtlasBanner__title">{title}</div>}
        {label && (
          <BasicButton label={label} size="mini" onClick={handleClick} />
        )}
        {isDismissable && (
          <button aria-label="close" onClick={handleCloseBanner}>{trailingIcon}</button>
        )}
      </div>
    </div>
  );
}

AtlasBanner.propTypes = {
  /** one of information, warning, destructive, success */
  type: PropTypes.oneOf(bannerTypes),
  /** whether or not you can close the banner */
  isDismissable: PropTypes.bool,
  /** text to display for the title */
  title: PropTypes.string.isRequired,
  /** text to display in the button */
  label: PropTypes.string,
  /** click handler */
  handleClick: PropTypes.func,
  /** click handler to close banner */
  handleClose: PropTypes.func,
  /** how long to display the banner (in milliseconds) */
  timeout: PropTypes.number,
  /** icon to display to the left of banner content  */
  leadingIcon: PropTypes.element.isRequired,
  /** icon to display to the right of banner content  */
  trailingIcon: PropTypes.element,
};
