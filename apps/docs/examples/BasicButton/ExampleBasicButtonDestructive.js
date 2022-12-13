import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Destructive style */
export default function ExampleBasicButtonDestructive() {
  const label = "Button (Destructive)";

  return (
    <>
      <BasicButton label={label} type="destructive" />
      <BasicButton label={label} type="destructive" disabled />
      <BasicButton label={label} type="destructive" size="small" />
      <BasicButton label={label} type="destructive" size="mini" />
    </>
  );
}
