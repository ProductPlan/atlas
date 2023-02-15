import React from "react";
import { AtlasAlert } from "@productplan/atlas";

/** Alert with Button and Title */
export default function ExampleAtlasAlertWithTitleButton() {
  return (
    <div style={{border: '2px solid var(--a-color-light-gray-100)', width: '556px', borderRadius: '4px'}}>
    <div style={{margin:'4px'}}>
        <AtlasAlert
          title="This success alert has a title!"
          content="This is the content of a success alert that has a title and button."
          icon={<i className="fas fa-circle-check"></i>}
          label='Success'
          handleClick = { () => alert('Success!')}
          type='success'
        />
      </div>
    </div>
  )
  
}