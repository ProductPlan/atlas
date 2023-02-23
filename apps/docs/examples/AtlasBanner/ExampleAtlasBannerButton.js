import React from "react";
import { AtlasBanner } from "@productplan/atlas";

/** Banner with Button */
export default function ExampleAtlasBannerButton() {
  return (
    <div>
    <AtlasBanner 
            title="this is a title." 
            label="Label"  
            leadingIcon={<i className="fas fa-circle-check"></i>} 
            type="information"
            handleClick = {(() => alert('Hello!'))}
    />
  </div>
  )
}
