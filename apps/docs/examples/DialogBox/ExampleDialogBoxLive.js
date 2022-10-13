import React, {useState} from "react";
import {DialogBox, BasicButton} from "@productplan/atlas";

/** Live Demo */
export default function ExampleDialogBoxLive() {
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => setIsVisible(false);
  return (
    <div>
      <BasicButton label="Launch Modal" htmlForm="" htmlType="button" type="default" onClick={() => setIsVisible(true)} />
      <DialogBox title="Title" subtitle="Subtitle" visible={isVisible} onCancel={onClose} onClose={onClose}>
        <div>Modal Dialog renders children in the body</div>
      </DialogBox>
    </div>
  
  )
}
