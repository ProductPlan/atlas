import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Title */
export default function ExampleAtlasAlertWithTitle() {
  return (
    <div style={{width: '548px'}}>
    <div>
        <AtlasAlert
        hasTitle
        title="This alert has a title!"
          content="This is the content."
          icon={<i className="fas fa-circle-info"></i>}
        />
      </div>
    </div>
  )
  
}
