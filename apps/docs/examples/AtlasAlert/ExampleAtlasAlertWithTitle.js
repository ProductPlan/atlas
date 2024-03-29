import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Title */
export default function ExampleAtlasAlertWithTitle() {
  return (
    <div style={{border: '2px solid var(--a-color-light-gray-100)', width: '556px', borderRadius: '4px'}}>
    <div style={{margin:'4px'}}>
        <AtlasAlert
          title="This information alert has a title!"
          content="This is the content of an information alert with only a title."
          icon={<i className="fas fa-circle-info"></i>}
          type='information'
        />
      </div>
    </div>
  )
  
}
