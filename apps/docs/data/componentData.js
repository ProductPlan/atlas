module.exports = [{"name":"BasicButton","description":"A Basic Button","props":{"label":{"type":{"name":"string"},"required":true,"description":"Text to display in the button"},"htmlForm":{"type":{"name":"string"},"required":false,"description":"Optional: what form on the page should this button be attached to"},"htmlType":{"type":{"name":"enum","value":[{"value":"\"button\"","computed":false},{"value":"\"submit\"","computed":false},{"value":"\"reset\"","computed":false}]},"required":false,"description":"html type attribute, one of button, submit, or reset","defaultValue":{"value":"\"button\"","computed":false}},"htmlId":{"type":{"name":"string"},"required":true,"description":"html id attribute"},"type":{"type":{"name":"enum","value":[{"value":"\"default\"","computed":false},{"value":"\"secondary\"","computed":false},{"value":"\"ghost\"","computed":false}]},"required":false,"description":"one of default, secondary, ghost","defaultValue":{"value":"\"default\"","computed":false}},"onClick":{"type":{"name":"func"},"required":false,"description":"Click Handler"},"trailingIcon":{"type":{"name":"element"},"required":false,"description":"icon to display to the right of the label"},"leadingIcon":{"type":{"name":"element"},"required":false,"description":"icon to display to the left of the label"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport classNames from \"classnames\";\nimport \"./BasicButton.scss\";\n\nconst buttonHtmlTypes = [\"button\", \"submit\", \"reset\"];\nexport const buttonVariants = [\"default\", \"secondary\", \"ghost\"];\n\n/** A Basic Button */\nexport default function BasicButton({\n  label,\n  htmlForm,\n  htmlType = \"button\",\n  type = \"default\",\n  onClick,\n  trailingIcon,\n  leadingIcon,\n}) {\n  const classes = classNames(\"BasicButton\", {\n    [`BasicButton--${type}`]: type !== \"default\",\n  });\n\n  return (\n    <button\n      className={classes}\n      type={htmlType}\n      form={htmlForm}\n      onClick={onClick}\n    >\n      {leadingIcon ? (\n        <span className=\"BasicButton__leadingIcon\">{leadingIcon}</span>\n      ) : null}\n      {label}\n      {trailingIcon ? (\n        <span className=\"BasicButton__trailingIcon\">{trailingIcon}</span>\n      ) : null}\n    </button>\n  );\n}\n\nBasicButton.propTypes = {\n  /** Text to display in the button */\n  label: PropTypes.string.isRequired,\n  /** Optional: what form on the page should this button be attached to */\n  htmlForm: PropTypes.string,\n  /** html type attribute, one of button, submit, or reset */\n  htmlType: PropTypes.oneOf(buttonHtmlTypes),\n  /** html id attribute */\n  htmlId: PropTypes.string.isRequired,\n  /** one of default, secondary, ghost */\n  type: PropTypes.oneOf(buttonVariants),\n  /** Click Handler */\n  onClick: PropTypes.func,\n  /** icon to display to the right of the label */\n  trailingIcon: PropTypes.element,\n  /** icon to display to the left of the label */\n  leadingIcon: PropTypes.element,\n};\n","examples":[{"name":"ExampleBasicButtonDefault","description":"Default style","code":"import React from \"react\";\nimport {BasicButton} from \"@productplan/atlas\";\n\n/** Default style */\nexport default function ExampleBasicButtonDefault() {\n  return <BasicButton label=\"Howdy\" htmlId=\"default_button\" htmlForm=\"\" htmlType=\"button\" type=\"default\" />\n}\n"},{"name":"ExampleBasicButtonGhost","description":"Ghost style","code":"import React from \"react\";\nimport {BasicButton} from \"@productplan/atlas\";\n\n/** Ghost style */\nexport default function ExampleBasicButtonGhost() {\n  return <BasicButton label=\"Howdy again\" htmlId=\"ghost_button\" htmlForm=\"\" htmlType=\"button\" type=\"ghost\" />\n}\n"},{"name":"ExampleBasicButtonSecondary","description":"Secondary style","code":"import React from \"react\";\nimport {BasicButton} from \"@productplan/atlas\";\n\n/** Secondary style */\nexport default function ExampleBasicButtonSecondary() {\n  return <BasicButton label=\"Howdy\" htmlId=\"secondary_button\" htmlForm=\"\" htmlType=\"button\" type=\"secondary\" />\n}\n"},{"name":"ExampleBasicButtonWithTrailingIcon","description":"Button with a trailing icon","code":"import React from \"react\";\nimport {BasicButton} from \"@productplan/atlas\";\n\n/** Button with a trailing icon */\nexport default function ExampleBasicButtonWithTrailingIcon() {\n  return <BasicButton label=\"I have an icon!\" htmlForm=\"\" htmlId=\"button_trailing_icon\" htmlType=\"button\" type=\"default\" trailingIcon={<i className=\"fas fa-check\" />} />\n}\n"}]},{"name":"DialogBox","description":"","props":{"title":{"type":{"name":"string"},"required":true,"description":"Displays in the Modal Header"},"subtitle":{"type":{"name":"string"},"required":true,"description":"Displays below the title"},"children":{"type":{"name":"element"},"required":false,"description":"child nodes composed in JSX"},"visible":{"type":{"name":"bool"},"required":false,"description":"whether the dialog is open or not","defaultValue":{"value":"false","computed":false}},"onCancel":{"type":{"name":"func"},"required":false,"description":"callback function for cancel event"},"onClose":{"type":{"name":"func"},"required":false,"description":"callback function for close event"},"customHeader":{"type":{"name":"element"},"required":false,"description":"pass in JSX to override the default header"},"customFooter":{"type":{"name":"element"},"required":false,"description":"pass in JSX to override the default footer"}},"code":"import React, { useEffect, useRef } from \"react\";\nimport PropTypes from \"prop-types\";\nimport BasicButton from \"@components/BasicButton\";\nimport \"./DialogBox.scss\";\nimport IconButton from \"@components/IconButton\";\n\n{\n  /** A Simple modal dialog that displays above the page content and renders children in the body of the modal */\n}\nexport default function DialogBox({\n  title,\n  subtitle,\n  // customHeader,\n  // customFooter,\n  children,\n  visible = false,\n  onCancel,\n  onClose,\n}) {\n  // const [isVisible, setIsVisible] = useState(false);\n  const dialogEl = useRef(null);\n\n  useEffect(() => {\n    if (visible) {\n      dialogEl.current.showModal();\n    }\n  }, [visible]);\n\n  // setIsVisible(visible);\n  return (\n    <dialog\n      className=\"ModalDialog\"\n      ref={dialogEl}\n      onCancel={onCancel}\n      onClose={onClose}\n    >\n      <ModalHeader\n        title={title}\n        subtitle={subtitle}\n        handleClose={() => dialogEl.current.close()}\n      />\n\n      <section className=\"ModalDialog__body\">{children}</section>\n\n      <ModalFooter>\n        <BasicButton\n          type=\"ghost\"\n          label=\"Cancel\"\n          onClick={() => dialogEl.current.close()}\n          htmlId=\"dialogBoxCancel\"\n        />\n        <BasicButton label=\"Submit\" htmlType=\"submit\" htmlForm=\"aform\" />\n      </ModalFooter>\n    </dialog>\n  );\n}\n\nDialogBox.propTypes = {\n  /** Displays in the Modal Header */\n  title: PropTypes.string.isRequired,\n  /** Displays below the title */\n  subtitle: PropTypes.string.isRequired,\n  /** child nodes composed in JSX */\n  children: PropTypes.element,\n  /** whether the dialog is open or not */\n  visible: PropTypes.bool,\n  /** callback function for cancel event */\n  onCancel: PropTypes.func,\n  /** callback function for close event */\n  onClose: PropTypes.func,\n  /** pass in JSX to override the default header */\n  customHeader: PropTypes.element,\n  /** pass in JSX to override the default footer */\n  customFooter: PropTypes.element,\n};\n\nfunction ModalHeader({ title, subtitle, handleClose }) {\n  return (\n    <header className=\"ModalDialog__header\">\n      <div>\n        <h1 className=\"ModalDialog__title\">{title}</h1>\n        <p className=\"ModalDialog__subtitle\">{subtitle}</p>\n      </div>\n      <IconButton faClass=\"fa-times\" onClick={handleClose} />\n    </header>\n  );\n}\n\nModalHeader.propTypes = {\n  title: PropTypes.string.isRequired,\n  subtitle: PropTypes.string.isRequired,\n  handleClose: PropTypes.func.isRequired,\n};\n\nfunction ModalFooter(props) {\n  return <footer className=\"ModalDialog__footer\">{props.children}</footer>;\n}\n\nModalFooter.propTypes = {\n  children: PropTypes.element,\n};\n","examples":[{"name":"ExampleDialogBox","description":"Static Example","code":"import React from \"react\";\nimport { IconButton, BasicButton } from \"@productplan/atlas\";\n\n/** Static Example */\nexport default function ExampleDialogBox() {\n  return (\n    <div className=\"ModalDialog\">\n      <header className=\"ModalDialog__header\">\n        <div>\n          <h1 className=\"ModalDialog__title\">Title</h1>\n          <p className=\"ModalDialog__subtitle\">Subtitle</p>\n        </div>\n        <IconButton faClass=\"fa-times\" onClick={() => {}} />\n      </header>\n      <section className=\"ModalDialog__body\">\n        Children render in the body\n      </section>\n      <footer className=\"ModalDialog__footer\">\n        <BasicButton htmlId=\"cancel\" type=\"ghost\" label=\"Cancel\" onClick={() => {}} />\n        <BasicButton htmlId=\"submit\" label=\"Submit\" htmlType=\"submit\" htmlForm=\"aform\" />\n      </footer>\n    </div>\n  );\n}\n"},{"name":"ExampleDialogBoxLive","description":"Live Demo","code":"import React, {useState} from \"react\";\nimport {DialogBox, BasicButton} from \"@productplan/atlas\";\n\n/** Live Demo */\nexport default function ExampleDialogBoxLive() {\n  const [isVisible, setIsVisible] = useState(false);\n  const onClose = () => setIsVisible(false);\n  return (\n    <div>\n      <BasicButton label=\"Launch Modal\" htmlForm=\"\" htmlType=\"button\" type=\"default\" onClick={() => setIsVisible(true)} />\n      <DialogBox title=\"Title\" subtitle=\"Subtitle\" visible={isVisible} onCancel={onClose} onClose={onClose}>\n        <div>Modal Dialog renders children in the body</div>\n      </DialogBox>\n    </div>\n  \n  )\n}\n"}]},{"name":"Drawer","description":"A drawer is used when you need to perform an action that may be helped by keeping the roadmap layout in context.\nThis will most likely be a place for multiple actions or a place for a complex action that takes multiple steps.","props":{"position":{"type":{"name":"enum","value":[{"value":"\"left\"","computed":false},{"value":"\"right\"","computed":false},{"value":"\"top\"","computed":false},{"value":"\"bottom\"","computed":false}]},"required":true,"description":"Position for the Drawer. Options: top, bottom, right, left"},"open":{"type":{"name":"bool"},"required":false,"description":"Current state for the Drawer.","defaultValue":{"value":"false","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":"Children (nodes) to display inside the Drawer"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport classNames from \"classnames\";\nimport BasicButton from \"@components/BasicButton\";\nimport \"./Drawer.scss\";\n\nconst DrawerBack = ({ label = \"Back\", onClick = () => {} }) => {\n  const classes = classNames(\"Drawer__back\");\n\n  return (\n    <div className={classes}>\n      <BasicButton\n        label={label}\n        type=\"ghost\"\n        onClick={onClick}\n        leadingIcon={<i className=\"fa fa-chevron-left\"></i>}\n      />\n    </div>\n  );\n};\n\nDrawerBack.propTypes = {\n  label: PropTypes.string,\n  onClick: PropTypes.func,\n};\n\nconst DrawerActions = ({ children }) => {\n  const classes = classNames(\"Drawer__actions\");\n\n  return <div className={classes}>{children}</div>;\n};\n\nDrawerActions.propTypes = {\n  children: PropTypes.node,\n};\n\nconst DrawerTitle = ({ children }) => {\n  const classes = classNames(\"Drawer__title\");\n\n  return <h4 className={classes}>{children}</h4>;\n};\n\nDrawerTitle.propTypes = {\n  children: PropTypes.node,\n};\n\nconst DrawerHeader = ({ children }) => {\n  const classes = classNames(\"Drawer__header\");\n\n  return <div className={classes}>{children}</div>;\n};\n\nDrawerHeader.propTypes = {\n  children: PropTypes.node,\n};\n\nconst DrawerBody = ({ children }) => {\n  const classes = classNames(\"Drawer__body\");\n\n  return <div className={classes}>{children}</div>;\n};\n\nDrawerBody.propTypes = {\n  children: PropTypes.node,\n};\n\nconst DrawerFooter = ({ children }) => {\n  const classes = classNames(\"Drawer__footer\");\n\n  return <div className={classes}>{children}</div>;\n};\n\nDrawerFooter.propTypes = {\n  children: PropTypes.node,\n};\n\n/**\n * A drawer is used when you need to perform an action that may be helped by keeping the roadmap layout in context.\n * This will most likely be a place for multiple actions or a place for a complex action that takes multiple steps.\n *\n */\nexport default function Drawer({ position, children, open = false }) {\n  const drawerClasses = classNames(\"Drawer\", `Drawer--${position}`);\n\n  if (!open) {\n    return null;\n  }\n\n  return (\n    <div role=\"dialog\" aria-modal=\"true\" className={drawerClasses}>\n      {children}\n    </div>\n  );\n}\n\nDrawer.Header = DrawerHeader;\nDrawer.Body = DrawerBody;\nDrawer.Footer = DrawerFooter;\nDrawer.Title = DrawerTitle;\nDrawer.Actions = DrawerActions;\nDrawer.Back = DrawerBack;\n\nDrawer.propTypes = {\n  /** Position for the Drawer. Options: top, bottom, right, left */\n  position: PropTypes.oneOf([\"left\", \"right\", \"top\", \"bottom\"]).isRequired,\n  /** Current state for the Drawer. */\n  open: PropTypes.bool,\n  /** Children (nodes) to display inside the Drawer */\n  children: PropTypes.node,\n};\n","examples":[{"name":"ExampleDrawer","description":"","code":"import React, { useState } from \"react\";\nimport { useCallback } from \"react\";\nimport { Drawer, BasicButton, IconButton } from \"@productplan/atlas\";\nimport { buttonVariants } from \"@productplan/atlas\";\n\nexport default function ExampleDrawer() {\n  // Full size Drawer\n  const [open, setOpen] = useState(false);\n  const [position, setPosition] = useState(\"right\");\n\n  const closeDrawer = useCallback(() => {\n    setOpen(false);\n  }, []);\n\n  const openDrawer = useCallback((newPosition) => {\n    setPosition(newPosition);\n    setOpen(true);\n  }, []);\n\n  const availablePositions = [\"left\", \"right\", \"top\", \"bottom\"];\n\n  return (\n    <div>\n      {availablePositions.map((position) => (\n        <BasicButton\n          kye={`${position}-button`}\n          label={`Launch Drawer (${position})`}\n          htmlForm=\"\"\n          htmlType=\"button\"\n          type=\"default\"\n          onClick={() => openDrawer(position)}\n        />\n      ))}\n\n      <Drawer open={open} position={position}>\n        <Drawer.Header>\n          <Drawer.Back\n            onClick={() => {\n              alert(\"Clicked on the Back button\");\n            }}\n          />\n          <Drawer.Title>Drawer Title</Drawer.Title>\n          <Drawer.Actions>\n            <IconButton faClass=\"fa-times\" onClick={closeDrawer} />\n          </Drawer.Actions>\n        </Drawer.Header>\n        <Drawer.Body>\n          <div>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n            <p>This is the Body for the Drawer</p>\n          </div>\n        </Drawer.Body>\n        <Drawer.Footer>\n          <BasicButton type=\"ghost\" label=\"Cancel\" onClick={closeDrawer} />\n          <BasicButton type=\"default\" label=\"Confirm\" onClick={closeDrawer} />\n        </Drawer.Footer>\n      </Drawer>\n    </div>\n  );\n}\n"}]},{"name":"IconButton","description":"A simple button containing only an icon","props":{"faClass":{"type":{"name":"string"},"required":true,"description":"The icon class to render"},"onClick":{"type":{"name":"func"},"required":false,"description":"Click Handler"},"isActive":{"type":{"name":"bool"},"required":false,"description":"Whether or not the button is active"}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\nimport classNames from \"classnames\";\nimport \"./IconButton.scss\";\n\n/** A simple button containing only an icon */\nexport default function IconButton({ faClass, onClick, isActive }) {\n  const iconClasses = classNames(\"fa\", faClass);\n  const buttonClasses = classNames(\"IconButton\", {\n    \"is-active\": isActive,\n  });\n\n  return (\n    <button className={buttonClasses} onClick={onClick}>\n      <i className={iconClasses} />\n    </button>\n  );\n}\n\nIconButton.propTypes = {\n  /** The icon class to render */\n  faClass: PropTypes.string.isRequired,\n  /** Click Handler */\n  onClick: PropTypes.func,\n  /** Whether or not the button is active */\n  isActive: PropTypes.bool,\n};\n","examples":[{"name":"ExampleIconButton","description":"Default style","code":"import React from \"react\";\nimport {IconButton} from \"@productplan/atlas\";\n\n/** Default style */\nexport default function ExampleIconButton() {\n  return <IconButton faClass=\"fa-times\" htmlId=\"example_icon_button\" />\n}\n"}]}]