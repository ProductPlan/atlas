import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Button and Title */
export default function ExampleAtlasAlertWithTitleButton() {
  return (
    <div style={{width: '548px'}}>
    <div>
        <AtlasAlert
         hasTitle
         title="This alert has a title!"
          content="This is the content."
          icon={<i className="fas fa-circle-check"></i>}
          hasButton
          label='Button'
          handleClick = { () => alert('Hello!')}
          type='success'
        />
      </div>
    </div>
  )
  
}