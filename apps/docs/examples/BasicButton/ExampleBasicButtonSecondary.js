import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Secondary style */
export default function ExampleBasicButtonSecondary() {
  const label = "Button (Secondary)";

  return (
    <>
      <BasicButton label={label} htmlType="button" type="secondary" />
      <BasicButton label={label} htmlType="button" type="secondary" disabled />
    </>
  );
}
