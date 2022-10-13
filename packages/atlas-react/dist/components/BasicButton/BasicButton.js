"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonVariants = void 0;
exports.default = BasicButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./BasicButton.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const buttonHtmlTypes = ["button", "submit", "reset"];
const buttonVariants = ["default", "secondary", "ghost"];

/** A Basic Button */
exports.buttonVariants = buttonVariants;
function BasicButton(_ref) {
  let {
    label,
    htmlForm,
    htmlType = "button",
    type = "default",
    onClick,
    trailingIcon,
    leadingIcon
  } = _ref;
  const classes = (0, _classnames.default)("BasicButton", {
    ["BasicButton--".concat(type)]: type !== "default"
  });
  return /*#__PURE__*/_react.default.createElement("button", {
    className: classes,
    type: htmlType,
    form: htmlForm,
    onClick: onClick
  }, leadingIcon ? /*#__PURE__*/_react.default.createElement("span", {
    className: "BasicButton__leadingIcon"
  }, leadingIcon) : null, label, trailingIcon ? /*#__PURE__*/_react.default.createElement("span", {
    className: "BasicButton__trailingIcon"
  }, trailingIcon) : null);
}
BasicButton.propTypes = {
  /** Text to display in the button */
  label: _propTypes.default.string.isRequired,
  /** Optional: what form on the page should this button be attached to */
  htmlForm: _propTypes.default.string,
  /** html type attribute, one of button, submit, or reset */
  htmlType: _propTypes.default.oneOf(buttonHtmlTypes),
  /** html id attribute */
  htmlId: _propTypes.default.string.isRequired,
  /** one of default, secondary, ghost */
  type: _propTypes.default.oneOf(buttonVariants),
  /** Click Handler */
  onClick: _propTypes.default.func,
  /** icon to display to the right of the label */
  trailingIcon: _propTypes.default.element,
  /** icon to display to the left of the label */
  leadingIcon: _propTypes.default.element
};