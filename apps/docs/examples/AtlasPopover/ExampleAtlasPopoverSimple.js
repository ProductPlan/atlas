import React, {useState} from "react";
import { AtlasPopover } from "@productplan/atlas";


/** Popover Simple */
export default function ExampleAtlasPopoverSimple() {
  const [showPopover, setShowPopover] = useState(false);
  const [refElement, setRefElement] = useState(null);

  return (
    <>
      <div style={{textAlign: "center"}}>
        <button onClick={() => setShowPopover(!showPopover)} ref={setRefElement}>Show Popover Simple</button>
      </div>
      <AtlasPopover
        open={showPopover}
        title="Popover Simple Title"
        description="I am a simple popover."
        placement="top"
        onReadMoreClick={() => alert("well hello")}
        simple={true}
        referenceElement={refElement}
      >
      <div>Hello</div>
      <div>Render me!</div>
      <div>render whatever!</div>
    </AtlasPopover>
    </>
  );
}
