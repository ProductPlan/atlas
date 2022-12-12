import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Destructive style */
export default function ExampleBasicButtonDestructive() {
  const label = "Button (Destructive)";

  return (
    <>
      <BasicButton label={label} htmlType="button" type="destructive" />
      <BasicButton label={label} htmlType="button" type="destructive" disabled />
    </>
  );
}
