import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Button with a trailing icon */
export default function ExampleBasicButtonWithTrailingIcon() {
  return <BasicButton label="I have an icon!" htmlForm="" htmlId="button_trailing_icon" htmlType="button" type="default" trailingIcon={<i className="fas fa-check" />} />
}
