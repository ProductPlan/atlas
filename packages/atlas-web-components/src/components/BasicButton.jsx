import register from 'preact-custom-element';
import styles from "./BasicButton.scss";
import "redefine-custom-elements";

const BasicButton = ({
  label = "",
  theme = "default",
  type = "button",
  size = "default",
  htmlId,
  leadingIcon,
  trailingIcon,
  disabled = undefined,
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        className={`BasicButton BasicButton--${theme} BasicButton--size-${size}`}
        type={type}
        htmlId={htmlId}
        disabled={disabled}
        size={size}
      >
        {leadingIcon && <span className="leadingIcon">{leadingIcon}</span>}
        {label}
        {trailingIcon && <span className="trailingIcon">{trailingIcon}</span>}
      </button>
    </>
  );
};

register(BasicButton, 'atlas-basic-button', [], { shadow: true });
