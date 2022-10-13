"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Drawer;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _atlas = require("@productplan/atlas");
require("./Drawer.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DrawerBack = _ref => {
  let {
    label = "Back",
    onClick = () => {}
  } = _ref;
  const classes = (0, _classnames.default)("Drawer__back");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(_atlas.BasicButton, {
    label: label,
    type: "ghost",
    onClick: onClick,
    leadingIcon: /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-chevron-left"
    })
  }));
};
const DrawerActions = _ref2 => {
  let {
    children
  } = _ref2;
  const classes = (0, _classnames.default)("Drawer__actions");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};
const DrawerTitle = _ref3 => {
  let {
    children
  } = _ref3;
  const classes = (0, _classnames.default)("Drawer__title");
  return /*#__PURE__*/_react.default.createElement("h4", {
    className: classes
  }, children);
};
const DrawerHeader = _ref4 => {
  let {
    children
  } = _ref4;
  const classes = (0, _classnames.default)("Drawer__header");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};
const DrawerBody = _ref5 => {
  let {
    children
  } = _ref5;
  const classes = (0, _classnames.default)("Drawer__body");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};
const DrawerFooter = _ref6 => {
  let {
    children
  } = _ref6;
  const classes = (0, _classnames.default)("Drawer__footer");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children);
};

/**
 * A drawer is used when you need to perform an action that may be helped by keeping the roadmap layout in context.
 * This will most likely be a place for multiple actions or a place for a complex action that takes multiple steps.
 *
 */
function Drawer(_ref7) {
  let {
    position,
    children,
    open = false
  } = _ref7;
  const drawerClasses = (0, _classnames.default)('Drawer', "Drawer--".concat(position));
  if (!open) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: drawerClasses
  }, children);
}
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Title = DrawerTitle;
Drawer.Actions = DrawerActions;
Drawer.Back = DrawerBack;
Drawer.propTypes = {
  /** Position for the Drawer. Options: top, bottom, right, left */
  position: _propTypes.default.oneOf(["left", "right", "top", "bottom"]).isRequired,
  /** Current state for the Drawer. */
  open: _propTypes.default.bool,
  /** Children (nodes) to display inside the Drawer */
  children: _propTypes.default.node
};