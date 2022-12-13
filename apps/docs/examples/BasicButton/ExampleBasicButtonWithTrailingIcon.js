import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Button with a trailing icon */
export default function ExampleBasicButtonWithTrailingIcon() {
  return (
    <>
      <BasicButton label="I have an icon!" htmlType="button" type="default" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="secondary" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="tertiary" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="destructive" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="ghost" trailingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="default" trailingIcon={<i className="fas fa-check" />} size="small" />
      <BasicButton label="I have an icon!" htmlType="button" type="default" trailingIcon={<i className="fas fa-check" />} size="mini" />
    </>
  );
}
