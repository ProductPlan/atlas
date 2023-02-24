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
      leadingIcon={<i className="fas fa-circle-check"></i>}
      type="warning"
    />
    <AtlasBanner
      title="This is a destructive banner."
      leadingIcon={<i className="fas fa-circle-check"></i>}
      type="destructive"
    />
    <AtlasBanner
      title="This is a success banner."
      leadingIcon={<i className="fas fa-circle-check"></i>}
      type="success"
    />
  </div>
  )
}
