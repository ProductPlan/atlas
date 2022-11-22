import register from 'preact-custom-element';
import styles from "./BasicButton.scss";

const BasicButton = ({
  label = "",
  onClick = () => {},
  theme = "default",
  leadingIcon,
  trailingIcon,
  type = "button",
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        onClick={onClick}
        className={`BasicButton BasicButton--${theme}`}
        type={type}
      >
        {leadingIcon && <span className="leadingIcon">{leadingIcon}</span>}
        {label}
        {trailingIcon && <span className="trailingIcon">{trailingIcon}</span>}
      </button>
    </>
  );
};

register(BasicButton, 'atlas-basic-button', [], { shadow: true });
