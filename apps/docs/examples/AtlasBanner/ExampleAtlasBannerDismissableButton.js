import React, {useState} from "react";
import { AtlasBanner, BasicButton } from "@productplan/atlas";

/** Dismissable Banner with Button */
export default function ExampleAtlasBannerDismissableButton() {
    const [showButton, setShowButton] = useState(true)

    return (
        <div>
         {showButton ?  
         <BasicButton label="Show Banner" onClick={(()=> setShowButton(false))}/> 
         : <AtlasBanner
          label="Button" 
          title="This is a title."
          leadingIcon={<i className="fas fa-circle-check"></i>}
          trailingIcon={<i className="fas fa-xmark"></i>}
          type="destructive"
          isDismissable
          handleClose = {(()=> setShowButton(true))}
          handleClick = {(() => alert('Hello!'))}
          />}
      </div>
    )
  }