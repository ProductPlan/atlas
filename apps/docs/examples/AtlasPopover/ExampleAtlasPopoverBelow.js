import React, {useState} from "react";
import { AtlasPopover } from "@productplan/atlas";

/** Popover Below */
export default function ExampleAtlasPopoverBelow() {
  const [showPopover, setShowPopover] = useState(false);
  const [refElement, setRefElement] = useState(null);

  return (
    <>
      <div style={{textAlign: "center"}}>
        <button onClick={() => setShowPopover(!showPopover)} ref={setRefElement}>Show Popover Below</button>
      </div>
      <AtlasPopover
        open={showPopover}
        title="Popover Below Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras ullamcorper blandit ipsum at iaculis.
        Integer scelerisque efficitur ipsum."
        placement="bottom"
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
