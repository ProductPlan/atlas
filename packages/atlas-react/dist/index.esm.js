import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnames.exports;

var buttonHtmlTypes = ["button", "submit", "reset"];
var buttonVariants = ["default", "secondary", "ghost"];

/** A Basic Button */
function BasicButton(_ref) {
  var label = _ref.label,
    htmlForm = _ref.htmlForm,
    _ref$htmlType = _ref.htmlType,
    htmlType = _ref$htmlType === void 0 ? "button" : _ref$htmlType,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "default" : _ref$type,
    onClick = _ref.onClick,
    trailingIcon = _ref.trailingIcon,
    leadingIcon = _ref.leadingIcon;
  var classes = classNames("BasicButton", _defineProperty({}, "BasicButton--".concat(type), type !== "default"));
  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    type: htmlType,
    form: htmlForm,
    onClick: onClick
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "BasicButton__leadingIcon"
  }, leadingIcon) : null, label, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "BasicButton__trailingIcon"
  }, trailingIcon) : null);
}
BasicButton.propTypes = {
  /** Text to display in the button */
  label: PropTypes.string.isRequired,
  /** Optional: what form on the page should this button be attached to */
  htmlForm: PropTypes.string,
  /** html type attribute, one of button, submit, or reset */
  htmlType: PropTypes.oneOf(buttonHtmlTypes),
  /** html id attribute */
  htmlId: PropTypes.string.isRequired,
  /** one of default, secondary, ghost */
  type: PropTypes.oneOf(buttonVariants),
  /** Click Handler */
  onClick: PropTypes.func,
  /** icon to display to the right of the label */
  trailingIcon: PropTypes.element,
  /** icon to display to the left of the label */
  leadingIcon: PropTypes.element
};

/** A simple button containing only an icon */
function IconButton(_ref) {
  var faClass = _ref.faClass,
    onClick = _ref.onClick,
    isActive = _ref.isActive;
  var iconClasses = classNames("fa", faClass);
  var buttonClasses = classNames("IconButton", {
    "is-active": isActive
  });
  return /*#__PURE__*/React.createElement("button", {
    className: buttonClasses,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: iconClasses
  }));
}
IconButton.propTypes = {
  /** The icon class to render */
  faClass: PropTypes.string.isRequired,
  /** Click Handler */
  onClick: PropTypes.func,
  /** Whether or not the button is active */
  isActive: PropTypes.bool
};

function DialogBox(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    onCancel = _ref.onCancel,
    onClose = _ref.onClose;
  // const [isVisible, setIsVisible] = useState(false);
  var dialogEl = useRef(null);
  useEffect(function () {
    if (visible) {
      dialogEl.current.showModal();
    }
  }, [visible]);

  // setIsVisible(visible);
  return /*#__PURE__*/React.createElement("dialog", {
    className: "ModalDialog",
    ref: dialogEl,
    onCancel: onCancel,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    title: title,
    subtitle: subtitle,
    handleClose: function handleClose() {
      return dialogEl.current.close();
    }
  }), /*#__PURE__*/React.createElement("section", {
    className: "ModalDialog__body"
  }, children), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(BasicButton, {
    type: "ghost",
    label: "Cancel",
    onClick: function onClick() {
      return dialogEl.current.close();
    },
    htmlId: "dialogBoxCancel"
  }), /*#__PURE__*/React.createElement(BasicButton, {
    label: "Submit",
    htmlType: "submit",
    htmlForm: "aform"
  })));
}
DialogBox.propTypes = {
  /** Displays in the Modal Header */
  title: PropTypes.string.isRequired,
  /** Displays below the title */
  subtitle: PropTypes.string.isRequired,
  /** child nodes composed in JSX */
  children: PropTypes.element,
  /** whether the dialog is open or not */
  visible: PropTypes.bool,
  /** callback function for cancel event */
  onCancel: PropTypes.func,
  /** callback function for close event */
  onClose: PropTypes.func,
  /** pass in JSX to override the default header */
  customHeader: PropTypes.element,
  /** pass in JSX to override the default footer */
  customFooter: PropTypes.element
};
function ModalHeader(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    handleClose = _ref2.handleClose;
  return /*#__PURE__*/React.createElement("header", {
    className: "ModalDialog__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ModalDialog__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ModalDialog__subtitle"
  }, subtitle)), /*#__PURE__*/React.createElement(IconButton, {
    faClass: "fa-times",
    onClick: handleClose
  }));
}
ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};
function ModalFooter(props) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ModalDialog__footer"
  }, props.children);
}
ModalFooter.propTypes = {
  children: PropTypes.element
};

var DrawerBack = function DrawerBack(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Back" : _ref$label,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  var classes = classNames("Drawer__back");
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(BasicButton, {
    label: label,
    type: "ghost",
    onClick: onClick,
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa fa-chevron-left"
    })
  }));
};
DrawerBack.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};
var DrawerActions = function DrawerActions(_ref2) {
  var children = _ref2.children;
  var classes = classNames("Drawer__actions");
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, children);
};
DrawerActions.propTypes = {
  children: PropTypes.node
};
var DrawerTitle = function DrawerTitle(_ref3) {
  var children = _ref3.children;
  var classes = classNames("Drawer__title");
  return /*#__PURE__*/React.createElement("h4", {
    className: classes
  }, children);
};
DrawerTitle.propTypes = {
  children: PropTypes.node
};
var DrawerHeader = function DrawerHeader(_ref4) {
  var children = _ref4.children;
  var classes = classNames("Drawer__header");
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, children);
};
DrawerHeader.propTypes = {
  children: PropTypes.node
};
var DrawerBody = function DrawerBody(_ref5) {
  var children = _ref5.children;
  var classes = classNames("Drawer__body");
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, children);
};
DrawerBody.propTypes = {
  children: PropTypes.node
};
var DrawerFooter = function DrawerFooter(_ref6) {
  var children = _ref6.children;
  var classes = classNames("Drawer__footer");
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, children);
};
DrawerFooter.propTypes = {
  children: PropTypes.node
};

/**
 * A drawer is used when you need to perform an action that may be helped by keeping the roadmap layout in context.
 * This will most likely be a place for multiple actions or a place for a complex action that takes multiple steps.
 *
 */
function Drawer(_ref7) {
  var position = _ref7.position,
    children = _ref7.children,
    _ref7$open = _ref7.open,
    open = _ref7$open === void 0 ? false : _ref7$open;
  var drawerClasses = classNames("Drawer", "Drawer--".concat(position));
  if (!open) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
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
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  /** Current state for the Drawer. */
  open: PropTypes.bool,
  /** Children (nodes) to display inside the Drawer */
  children: PropTypes.node
};

export { BasicButton, DialogBox, Drawer, IconButton, buttonVariants };
