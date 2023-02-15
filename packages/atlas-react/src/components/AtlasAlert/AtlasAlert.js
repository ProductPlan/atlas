import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BasicButton from "@components/BasicButton";
import "./AtlasAlert.scss";

export const alertTypes = ["default", "information", "success", "warning", "danger"];
/** An alert which contains important information about a page.  */
export default function AtlasAlert({
  type = "default",
  title=null,
  label=null,
  handleClick,
  content,
  icon,
}) {
  const classes = classNames("AtlasAlert", { [`AtlasAlert--${type}`]: true });

  return (
    <div className={classes}>
      {icon}
      <div className="AtlasAlert__body">
        {title && <div className="AtlasAlert__title">{title}</div>}
        <div className="AtlasAlert__content">{content}</div>
        {label && (
          <BasicButton
            className="AtlasAlert__button"
            label={label}
            size="mini"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}

AtlasAlert.propTypes = {
  /** one of default, information, success, warning, danger */
  type: PropTypes.oneOf(alertTypes),
  /** text to display for the title */
  title: PropTypes.string,
  /** text to display in the button */
  label: PropTypes.string,
  /** click handler */
  handleClick: PropTypes.func,
  /** text to display for the content */
  content: PropTypes.string.isRequired,
  /** icon to display to the left of alert content  */
  icon: PropTypes.element.isRequired,
};
