import React, { useState } from "react";
import { useCallback } from "react";
import { Drawer, BasicButton, IconButton } from "@productplan/atlas";
import { buttonVariants } from "@productplan/atlas";

export default function ExampleDrawer() {
  // Full size Drawer
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("right");

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const openDrawer = useCallback((newPosition) => {
    setPosition(newPosition);
    setOpen(true);
  }, []);

  const availablePositions = ["left", "right", "top", "bottom"];

  return (
    <div>
      {availablePositions.map((position) => (
        <BasicButton
          kye={`${position}-button`}
          label={`Launch Drawer (${position})`}
          htmlForm=""
          htmlType="button"
          type="default"
          onClick={() => openDrawer(position)}
        />
      ))}

      <Drawer open={open} position={position}>
        <Drawer.Header>
          <Drawer.Back
            onClick={() => {
              alert("Clicked on the Back button");
            }}
          />
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <IconButton faClass="fa-times" onClick={closeDrawer} />
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
            <p>This is the Body for the Drawer</p>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <BasicButton type="ghost" label="Cancel" onClick={closeDrawer} />
          <BasicButton type="default" label="Confirm" onClick={closeDrawer} />
        </Drawer.Footer>
      </Drawer>
    </div>
  );
}
