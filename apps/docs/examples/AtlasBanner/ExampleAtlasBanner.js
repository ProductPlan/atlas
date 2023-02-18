import React from "react";
import { AtlasBanner } from "@productplan/atlas";

export default function ExampleAtlasBanner() {
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-around', height: '300px'}}>
 <AtlasBanner title="this is a title." 
                      leadingIcon={<i className="fas fa-circle-check"></i>} 
                      type="information"
  />
  <AtlasBanner title="this is a title." 
                      label="Label"  
                      leadingIcon={<i className="fas fa-circle-check"></i>} 
                      // trailingIcon={<i className="fas fa-xmark"></i>}
                      type="warning"
                      // isDismissable
  />
  <AtlasBanner title="this is a title." 
                      // label="Label"  
                      leadingIcon={<i className="fas fa-circle-check"></i>} 
                      trailingIcon={<i className="fas fa-xmark"></i>}
                      type="destructive"
                      isDismissable
  />
  <AtlasBanner title="this is a title." 
                      label="Label"  
                      leadingIcon={<i className="fas fa-circle-check"></i>} 
                      trailingIcon={<i className="fas fa-xmark"></i>}
                      type="success"
                      isDismissable
  />
  </div>
  )
}
