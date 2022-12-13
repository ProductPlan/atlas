import { BasicButton } from "@productplan/atlas";

/** Button Types (Themes) */
export default function ExampleBasicButtonStyles() {
  const label = "Button";

  return (
    <>
      <div>
        <h5>Default</h5>

        <BasicButton label={label} type="default" />
        <BasicButton label={label} type="default" disabled />
        <BasicButton label={label} type="default" size="small" />
        <BasicButton label={label} type="default" size="mini" />
      </div>

      <div>
        <h5>Secondary</h5>

        <BasicButton label={label} type="secondary" />
        <BasicButton label={label} type="secondary" disabled />
        <BasicButton label={label} type="secondary" size="small" />
        <BasicButton label={label} type="secondary" size="mini" />
      </div>

      <div>
        <h5>Tertiary</h5>

        <BasicButton label={label} type="tertiary" />
        <BasicButton label={label} type="tertiary" disabled />
        <BasicButton label={label} type="tertiary" size="small" />
        <BasicButton label={label} type="tertiary" size="mini" />
      </div>

      <div>
        <h5>Ghost</h5>

        <BasicButton label={label} type="ghost" />
        <BasicButton label={label} type="ghost" disabled />
        <BasicButton label={label} type="ghost" size="small" />
        <BasicButton label={label} type="ghost" size="mini" />
      </div>

      <div>
        <h5>Destructive</h5>

        <BasicButton label={label} type="destructive" />
        <BasicButton label={label} type="destructive" disabled />
        <BasicButton label={label} type="destructive" size="small" />
        <BasicButton label={label} type="destructive" size="mini" />
      </div>
    </>
  );
}
