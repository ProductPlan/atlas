"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DialogBox;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _atlas = require("@productplan/atlas");
require("./DialogBox.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
{/** A Simple modal dialog that displays above the page content and renders children in the body of the modal */}
function DialogBox(_ref) {
  let {
    title,
    subtitle,
    customHeader,
    customFooter,
    children,
    visible = false,
    onCancel,
    onClose
  } = _ref;
  // const [isVisible, setIsVisible] = useState(false);
  const dialogEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (visible) {
      dialogEl.current.showModal();
    }
  }, [visible]);

  // setIsVisible(visible);
  return /*#__PURE__*/_react.default.createElement("dialog", {
    className: "ModalDialog",
    ref: dialogEl,
    onCancel: onCancel,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(ModalHeader, {
    title: title,
    subtitle: subtitle,
    handleClose: () => dialogEl.current.close()
  }), /*#__PURE__*/_react.default.createElement("section", {
    className: "ModalDialog__body"
  }, children), /*#__PURE__*/_react.default.createElement(ModalFooter, null, /*#__PURE__*/_react.default.createElement(_atlas.BasicButton, {
    type: "ghost",
    label: "Cancel",
    onClick: () => dialogEl.current.close()
  }), /*#__PURE__*/_react.default.createElement(_atlas.BasicButton, {
    label: "Submit",
    htmlType: "submit",
    htmlForm: "aform"
  })));
}
DialogBox.propTypes = {
  /** Displays in the Modal Header */
  title: _propTypes.default.string.isRequired,
  /** Displays below the title */
  subtitle: _propTypes.default.string.isRequired,
  /** child nodes composed in JSX */
  children: _propTypes.default.element,
  /** whether the dialog is open or not */
  visible: _propTypes.default.bool,
  /** callback function for cancel event */
  onCancel: _propTypes.default.func,
  /** callback function for close event */
  onClose: _propTypes.default.func,
  /** pass in JSX to override the default header */
  customHeader: _propTypes.default.element,
  /** pass in JSX to override the default footer */
  customFooter: _propTypes.default.element
};
function ModalHeader(_ref2) {
  let {
    title,
    subtitle,
    handleClose
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "ModalDialog__header"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "ModalDialog__title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "ModalDialog__subtitle"
  }, subtitle)), /*#__PURE__*/_react.default.createElement(_atlas.IconButton, {
    faClass: "fa-times",
    onClick: handleClose
  }));
}
ModalHeader.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string.isRequired,
  handleClose: _propTypes.default.func.isRequired
};
function ModalFooter(props) {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "ModalDialog__footer"
  }, props.children);
}