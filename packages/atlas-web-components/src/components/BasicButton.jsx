import register from 'preact-custom-element';
import styles from "./BasicButton.scss";
import "redefine-custom-elements";

const BasicButton = ({
  label = "",
  theme = "default",
  type = "button",
  htmlId,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        className={`BasicButton BasicButton--${theme}`}
        type={type}
        htmlId={htmlId}
      >
        {leadingIcon && <span className="leadingIcon">{leadingIcon}</span>}
        {label}
        {trailingIcon && <span className="trailingIcon">{trailingIcon}</span>}
      </button>
    </>
  );
};

register(BasicButton, 'atlas-basic-button', [], { shadow: true });
