import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import BasicButton from "@components/BasicButton";
import "./Drawer.scss";

const DrawerBack = ({ label = "Back", onClick = () => {} }) => {
  const classes = classNames("AtlasDrawer__back");

  return (
    <div className={classes}>
      <BasicButton
        label={label}
        type="ghost"
        onClick={onClick}
        leadingIcon={<i className="fa fa-chevron-left"></i>}
      />
    </div>
  );
};

DrawerBack.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const DrawerActions = ({ children }) => {
  const classes = classNames("AtlasDrawer__actions");

  return <div className={classes}>{children}</div>;
};

DrawerActions.propTypes = {
  children: PropTypes.node,
};

const DrawerTitle = ({ children }) => {
  const classes = classNames("AtlasDrawer__title");

  return <h4 className={classes}>{children}</h4>;
};

DrawerTitle.propTypes = {
  children: PropTypes.node,
};

const DrawerHeader = ({ children }) => {
  const classes = classNames("AtlasDrawer__header");

  return <div className={classes}>{children}</div>;
};

DrawerHeader.propTypes = {
  children: PropTypes.node,
};

const DrawerBody = ({ children }) => {
  const classes = classNames("AtlasDrawer__body");

  return <div className={classes}>{children}</div>;
};

DrawerBody.propTypes = {
  children: PropTypes.node,
};

const DrawerFooter = ({ children }) => {
  const classes = classNames("AtlasDrawer__footer");

  return <div className={classes}>{children}</div>;
};

DrawerFooter.propTypes = {
  children: PropTypes.node,
};

/**
 * A drawer is used when you need to perform an action that may be helped by keeping the roadmap layout in context.
 * This will most likely be a place for multiple actions or a place for a complex action that takes multiple steps.
 *
 */
export default function Drawer({ position, children, open = false }) {
  const drawerClasses = classNames("AtlasDrawer", `AtlasDrawer--${position}`);

  if (!open) {
    return null;
  }

  return (
    <div role="dialog" aria-modal="true" className={drawerClasses}>
      {children}
    </div>
  );
}

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Title = DrawerTitle;
Drawer.Actions = DrawerActions;
Drawer.Back = DrawerBack;

Drawer.propTypes = {
  /** Position for the Drawer. Options: top, bottom, right, left */
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  /** Current state for the Drawer. */
  open: PropTypes.bool,
  /** Children (nodes) to display inside the Drawer */
  children: PropTypes.node,
};
