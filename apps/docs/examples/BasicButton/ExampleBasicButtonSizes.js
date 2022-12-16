import { BasicButton } from "@productplan/atlas";

/** Button Sizes */
export default function ExampleBasicButtonSizes() {
  const label = "Button";

  return (
    <>
      <div>
        <h5>Default</h5>

        <BasicButton label={label} type="default" />
      </div>

      <div>
        <h5>Small</h5>

        <BasicButton label={label} type="default" size="small" />
      </div>

      <div>
        <h5>Mini</h5>

        <BasicButton label={label} type="default" size="mini" />
      </div>

      <div>
        <h5>Full Width</h5>

        <BasicButton label={label} type="default" size="full-width" />
      </div>
    </>
  );
}
