import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AtlasPopover.scss";
import { usePopper } from "react-popper";

/** A popover which displays above or below the thing which opens it, pointing
 * back to that thing */
export default function AtlasPopover({
  description,
  title,
  onReadMoreClick,
  placement = "top",
  children,
  simple = false,
  open = false,
  referenceElement,
  offset = 12,
}) {
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, offset],
        },
      },
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
    ],
  });
  const classes = classNames("AtlasPopover", {
    "AtlasPopover--open": open,
    "AtlasPopover--simple": simple,
  });

  return (
    <>
      {open && (
        <div
          className={classes}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {!simple && <header className="AtlasPopover__header">{title}</header>}
          <div className="AtlasPopover__body">
            <div className="AtlasPopover__description">{description}</div>
            {onReadMoreClick && (
              <button
                className="AtlasPopover__action"
                onClick={onReadMoreClick}
              >
                {"Read more"}
              </button>
            )}
            {children && !simple && (
              <div className="AtlasPopover__meta">{children}</div>
            )}
          </div>
          <div
            className="AtlasPopover__arrow"
            ref={setArrowElement}
            style={styles.arrow}
          />
        </div>
      )}
    </>
  );
}

AtlasPopover.propTypes = {
  /** specify if it should be positioned above or below */
  placement: PropTypes.string,
  /** the primary text of the popover, truncated to 8 lines */
  description: PropTypes.string.isRequired,
  /** text which displays in the header of the popover */
  title: PropTypes.string,
  /** what to do if Read more is clicked. if not present, read more will not display */
  onReadMoreClick: PropTypes.func,
  /** HTML/component(s) to display at the bottom of the popover, such as for metadata */
  children: PropTypes.any,
  /** whether to display the default or simple popover */
  simple: PropTypes.bool,
  /** whether to show or hide the popover */
  open: PropTypes.bool,
  /** the element the Popover should point to */
  referenceElement: PropTypes.node,
  /** how far away the Popover should be from the element it points to */
  offset: PropTypes.number,
};

/* Questions:
 * does a popover have a maximum height?
 */
