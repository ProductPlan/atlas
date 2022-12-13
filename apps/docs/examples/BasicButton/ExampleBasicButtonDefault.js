import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Default style */
export default function ExampleBasicButtonDefault() {
  const label = "Button (Default)";

  return (
    <>
      <BasicButton label={label} htmlId="default_button" type="default" />
      <BasicButton label={label} htmlId="default_button" type="default" disabled />
      <BasicButton label={label} htmlId="default_button" type="default" size="small" />
      <BasicButton label={label} htmlId="default_button" type="default" size="mini" />
    </>
  );
}
