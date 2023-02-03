import React, { useState } from "react";
import { AtlasPopover } from "@productplan/atlas";

/** Popover Above */
export default function ExampleAtlasPopoverAbove() {
  const [showPopover, setShowPopover] = useState(false);
  const [refElement, setRefElement] = useState(null);

  return (
    <>
      <div style={{textAlign: "center"}}>
        <button onClick={() => setShowPopover(true)} ref={setRefElement}>Show Popover</button>
      </div>
      <AtlasPopover
        open={showPopover}
        title="Popover Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras ullamcorper blandit ipsum at iaculis.
        Integer scelerisque efficitur ipsum."
        placement="top"
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

