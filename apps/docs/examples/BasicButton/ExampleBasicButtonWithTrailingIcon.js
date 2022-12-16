import { BasicButton } from "@productplan/atlas";

/** Button with a trailing icon */
export default function ExampleBasicButtonWithTrailingIcon() {
  return (
    <>
      <BasicButton label="I have an icon!" type="default" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" type="secondary" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" type="tertiary" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" type="destructive" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" type="ghost" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" type="default" trailingIcon={<i className="fas fa-check" />} size="small" />
      <BasicButton label="I have an icon!" type="default" trailingIcon={<i className="fas fa-check" />} size="mini" />
    </>
  );
}
