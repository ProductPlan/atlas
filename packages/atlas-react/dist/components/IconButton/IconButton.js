"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./IconButton.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** A simple button containing only an icon */
function IconButton(_ref) {
  let {
    faClass,
    onClick,
    isActive
  } = _ref;
  const iconClasses = (0, _classnames.default)("fa", faClass);
  const buttonClasses = (0, _classnames.default)("IconButton", {
    "is-active": isActive
  });
  return /*#__PURE__*/_react.default.createElement("button", {
    className: buttonClasses,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: iconClasses
  }));
}
IconButton.propTypes = {
  /** The icon class to render */
  faClass: _propTypes.default.string.isRequired,
  /** Click Handler */
  onClick: _propTypes.default.func
};