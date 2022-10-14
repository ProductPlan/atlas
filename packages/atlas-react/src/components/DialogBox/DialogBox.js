import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import BasicButton from "@components/BasicButton";
import "./DialogBox.scss";
import IconButton from "@components/IconButton";

{
  /** A Simple modal dialog that displays above the page content and renders children in the body of the modal */
}
export default function DialogBox({
  title,
  subtitle,
  customHeader,
  customFooter,
  children,
  visible = false,
  onCancel,
  onClose,
}) {
  // const [isVisible, setIsVisible] = useState(false);
  const dialogEl = useRef(null);

  useEffect(() => {
    if (visible) {
      dialogEl.current.showModal();
    }
  }, [visible]);

  // setIsVisible(visible);
  return (
    <dialog
      className="ModalDialog"
      ref={dialogEl}
      onCancel={onCancel}
      onClose={onClose}
    >
      <ModalHeader
        title={title}
        subtitle={subtitle}
        handleClose={() => dialogEl.current.close()}
      />

      <section className="ModalDialog__body">{children}</section>

      <ModalFooter>
        <BasicButton
          type="ghost"
          label="Cancel"
          onClick={() => dialogEl.current.close()}
          htmlId="dialogBoxCancel"
        />
        <BasicButton label="Submit" htmlType="submit" htmlForm="aform" />
      </ModalFooter>
    </dialog>
  );
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
  customFooter: PropTypes.element,
};
function ModalHeader({ title, subtitle, handleClose }) {
  return (
    <header className="ModalDialog__header">
      <div>
        <h1 className="ModalDialog__title">{title}</h1>
        <p className="ModalDialog__subtitle">{subtitle}</p>
      </div>
      <IconButton faClass="fa-times" onClick={handleClose} />
    </header>
  );
}
ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

function ModalFooter(props) {
  return <footer className="ModalDialog__footer">{props.children}</footer>;
}
