import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Button */
export default function ExampleAtlasAlertWithButton() {
  return (
    <div style={{width: '548px'}}>
    <div>
        <AtlasAlert
          content="This is the content."
          icon={<i className="fas fa-circle-info"></i>}
          hasButton
          label='Button'
          handleClick = { () => alert('Hello!')}
          type='information'
        />
      </div>
    </div>
  )
  
}