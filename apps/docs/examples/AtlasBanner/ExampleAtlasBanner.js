import React from "react";
import { AtlasBanner } from "@productplan/atlas";

/** Banner Types */
export default function ExampleAtlasBanner() {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "300px",
    }}
  >
    <AtlasBanner
      title="This is an information banner."
      leadingIcon={<i className="fas fa-circle-check"></i>}
      type="information"
    />
    <AtlasBanner
      title="This is a warning banner."
      label="Label"
      leadingIcon={<i className="fas fa-circle-check"></i>}
      // trailingIcon={<i className="fas fa-xmark"></i>}
      type="warning"
      // isDismissable
    />
    <AtlasBanner
      title="This is a destructive banner."
      // label="Label"
      leadingIcon={<i className="fas fa-circle-check"></i>}
      trailingIcon={<i className="fas fa-xmark"></i>}
      type="destructive"
      isDismissable
    />
    <AtlasBanner
      title="This is a success banner."
      label="Label"
      leadingIcon={<i className="fas fa-circle-check"></i>}
      trailingIcon={<i className="fas fa-xmark"></i>}
      type="success"
      isDismissable
    />
  </div>
  )
}
