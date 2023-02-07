import React, { useState } from "react";
import { AtlasPopover } from "@productplan/atlas";

/** Popover Left */
export default function ExampleAtlasPopoverAbove() {
  const [showPopover, setShowPopover] = useState(false);
  const [refElement, setRefElement] = useState(null);

  return (
    <>
      <div style={{textAlign: "center"}}>
        <button onClick={() => setShowPopover(!showPopover)} ref={setRefElement}>Show Popover Left</button>
      </div>
      <AtlasPopover
        open={showPopover}
        title="Popover Left Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras ullamcorper blandit ipsum at iaculis.
        Integer scelerisque efficitur ipsum."
        placement="left"
        onReadMoreClick={() => alert("well hello")}
        referenceElement={refElement}
      >
      <div>Hello</div>
      <div>Render me!</div>
      <div>render whatever!</div>
    </AtlasPopover>
    </>
  );
}

