import React from "react";
import {BasicButton} from "@productplan/atlas";

/** Button with a leading icon */
export default function ExampleBasicButtonWithLeadingIcon() {
  return (
    <>
      <BasicButton label="I have an icon!" htmlType="button" type="default" leadingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="secondary" leadingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="tertiary" leadingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="destructive" leadingIcon={<i className="fas fa-check" />} />
      <BasicButton label="I have an icon!" htmlType="button" type="ghost" leadingIcon={<i className="fas fa-check" />} />
    </>
  );
}
