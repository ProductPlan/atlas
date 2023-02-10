import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Title */
export default function ExampleAtlasAlertWithTitle() {
  return (
    <div style={{border: '2px solid var(--a-color-light-gray-100)', width: '548px', borderRadius: '4px'}}>
    <div style={{margin:'4px'}}>
        <AtlasAlert
        hasTitle
        title="This alert has a title!"
          content="This is the content."
          icon={<i className="fas fa-circle-info"></i>}
          type='information'
        />
      </div>
    </div>
  )
  
}
