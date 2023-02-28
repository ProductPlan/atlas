import React, {useState} from "react";
import { AtlasBanner, BasicButton } from "@productplan/atlas";

/** Dismissable Banner */
export default function ExampleAtlasBannerDismissable() {
    const [showButton, setShowButton] = useState(false)

    return (
        <div>
         {showButton ?  
         <BasicButton label="Show Banner" onClick={(()=> setShowButton(false))}/> 
         : <AtlasBanner
          title="This banner can be dismissed."
          leadingIcon={<i className="fa fa-circle-exclamation"></i>}
          trailingIcon={<i className="fas fa-xmark"></i>}
          type="warning"
          isDismissable
          handleClose = {(()=> setShowButton(true))}
        />}
      </div>
    )
  }