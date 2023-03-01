import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Button */
export default function ExampleAtlasAlertWithButton() {
  return (
    <div style={{border: '2px solid var(--a-color-light-gray-100)', width: '556px', borderRadius: '4px'}}>
    <div style={{margin:'4px'}}>
        <AtlasAlert
          content="This is the content of a default alert."
          icon={<i className="fas fa-circle-info"></i>}
          label='Default'
          handleClick = { () => alert('Hello!')}
        />
      </div>
    </div>
  )
  
}