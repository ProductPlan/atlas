import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Default style */
export default function ExampleBasicButtonDefault() {
  const label = "Button (Default)";

  return (
    <>
      <BasicButton label={label} htmlId="default_button" htmlForm="" htmlType="button" type="default" />
      <BasicButton label={label} htmlId="default_button" htmlForm="" htmlType="button" type="default" disabled />
    </>
  );
}
