import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Ghost style */
export default function ExampleBasicButtonGhost() {
  const label = "Button (Ghost)";

  return (
    <>
      <BasicButton label={label} htmlType="button" type="ghost" />
      <BasicButton label={label} htmlType="button" type="ghost" disabled />
    </>
  );
}
