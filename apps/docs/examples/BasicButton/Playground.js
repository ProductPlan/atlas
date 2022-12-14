import { useState } from "react";
import { BasicButton } from "@productplan/atlas";

/** Playground */
export default function ExampleBasicButtonPlayground() {
  const [size, setSize] = useState("default");
  const [theme, setTheme] = useState("default");
  const [disabled, setDisabled] = useState(false);
  const [trailingIcon, setTrailingIcon] = useState(false);
  const [leadingIcon, setLeadingIcon] = useState(false);
  const [align, setAlign] = useState("center");
  const [label, setLabel] = useState("Button");

  const sizes = [
    { value: "default", label: "Default" },
    { value: "small", label: "Small" },
    { value: "mini", label: "Mini" },
    { value: "full-width", label: "Full Width"},
  ];

  const themes = [
    { value: "default", label: "Default" },
    { value: "secondary", label: "Secondary" },
    { value: "tertiary", label: "Tertiary" },
    { value: "destructive", label: "Destructive" },
    { value: "ghost", label: "Ghost" },
  ];

  const alignments = [
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
  ];

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  const changeDisabled = (e) => {
    setDisabled(e.target.checked || false);
  };

  const changeTrailingIcon = (e) => {
    setTrailingIcon(e.target.checked || false);
  };

  const changeLeadingIcon = (e) => {
    setLeadingIcon(e.target.checked || false);
  };

  const changeLabel = (e) => {
    setLabel(e.target.value);
  };

  const changeAlign = (e) => {
    setAlign(e.target.value);
  };

  return (
    <>
      <div>
        <h5>Size</h5>
        <div className="example-playground-options">
          {sizes.map((s) => (
            <label key={s.value}>
              <input type="radio" name="size" value={s.value} onChange={changeSize} checked={s.value === size} />
              {s.label}
            </label>
          ))}
        </div>

        <h5>Theme</h5>
        <div className="example-playground-options">
          {themes.map((t) => (
            <label key={t.value}>
              <input type="radio" name="theme" value={t.value} onChange={changeTheme} checked={t.value === theme} />
              {t.label}
            </label>
          ))}
        </div>

        <h5>Disabled</h5>
        <div className="example-playground-options">
          <label>
            <input type="checkbox" name="disabled" value="true" onChange={changeDisabled} />
            Disabled?
          </label>
        </div>

        <h5>Trailing Icon</h5>
        <div className="example-playground-options">
          <label>
            <input type="checkbox" name="trailingIcon" value="true" onChange={changeTrailingIcon} checked={trailingIcon === true} />
            Show?
          </label>
        </div>

        <h5>Leading Icon</h5>
        <div className="example-playground-options">
        <label>
            <input type="checkbox" name="leadingIcon" value="true" onChange={changeLeadingIcon} checked={leadingIcon === true} />
            Show?
          </label>
        </div>

        <h5>Label</h5>
        <div className="example-playground-options">
          <label>
            <input type="text" name="label" value={label} onChange={changeLabel} />
          </label>
        </div>

        <h5>Content Alignment</h5>
        <div className="example-playground-options">
          {alignments.map((a) => (
            <label key={a.value}>
              <input type="radio" name="align" value={a.value} onChange={changeAlign} checked={a.value === align} />
              {a.label}
            </label>
          ))}
        </div>
      </div>

      <h5>Result:</h5>

      <div>
        <BasicButton
          align={align}
          label={label}
          type={theme}
          size={size}
          disabled={disabled === true ? true : undefined}
          trailingIcon={trailingIcon ? <i className="fas fa-check" /> : null}
          leadingIcon={leadingIcon ? <i className="fas fa-check" /> : null}
        />
      </div>
    </>
  );
}
