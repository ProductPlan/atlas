import React from "react";
import { AtlasBanner } from "@productplan/atlas";

/** Banner with Button */
export default function ExampleAtlasBannerButton() {
  return (
    <div>
    <AtlasBanner 
            title="This banner has a button." 
            label="Label"  
            leadingIcon={<i className="fas fa-circle-info"></i>} 
            type="information"
            handleClick = {(() => alert('Hello!'))}
    />
  </div>
  )
}
