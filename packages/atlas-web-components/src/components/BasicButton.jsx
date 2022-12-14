import register from "preact-custom-element";
import styles from "./BasicButton.scss";
import "redefine-custom-elements";

const BasicButton = ({
  align = "center",
  disabled = undefined,
  htmlId = undefined,
  label = "",
  leadingIcon = null,
  size = "default",
  theme = "default",
  trailingIcon = null,
  type = "button",
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        className={`BasicButton BasicButton--${theme} BasicButton--size-${size} BasicButton--align-${align}`}
        type={type}
        htmlId={htmlId}
        disabled={disabled}
        size={size}
      >
        <span className="leadingIcon"><slot name="leadingIcon"></slot></span>
        {label}
        <span className="trailingIcon"><slot name="trailingIcon"></slot></span>
      </button>
    </>
  );
};

register(
  BasicButton,
  "atlas-basic-button",
  [
    "align",
    "disabled",
    "htmlId",
    "label",
    "leadingIcon",
    "size",
    "theme",
    "trailingIcon",
    "type",
  ],
  { shadow: true }
);
