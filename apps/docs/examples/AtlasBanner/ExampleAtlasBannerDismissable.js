import React, {useState} from "react";
import { AtlasBanner, BasicButton } from "@productplan/atlas";

/** Dismissable Banner */
export default function ExampleAtlasBannerDismissable() {
    const [showButton, setShowButton] = useState(true)

    return (
        <div>
         {showButton ?  
         <BasicButton label="Show Banner" onClick={(()=> setShowButton(false))}/> 
         : <AtlasBanner
          title="this is a title."
          leadingIcon={<i className="fas fa-circle-check"></i>}
          trailingIcon={<i className="fas fa-xmark"></i>}
          type="warning"
          isDismissable
          handleClose = {(()=> setShowButton(true))}
        />}
      </div>
    )
  }