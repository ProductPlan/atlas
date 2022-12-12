import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Tertiary style */
export default function ExampleBasicButtonTertiary() {
  const label = "Button (Tertiary)";

  return (
    <>
      <BasicButton label={label} htmlType="button" type="tertiary" />
      <BasicButton label={label} htmlType="button" type="tertiary" disabled />
    </>
  );
}
