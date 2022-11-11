import React from "react";
import { IconButton, BasicButton } from "@productplan/atlas";

/** Static Example */
export default function ExampleDialogBox() {
  return (
    <div className="AtlasModalDialog">
      <header className="AtlasModalDialog__header">
        <div>
          <h1 className="AtlasModalDialog__title">Title</h1>
          <p className="AtlasModalDialog__subtitle">Subtitle</p>
        </div>
        <IconButton faClass="fa-times" onClick={() => {}} />
      </header>
      <section className="AtlasModalDialog__body">
        Children render in the body
      </section>
      <footer className="AtlasModalDialog__footer">
        <BasicButton htmlId="cancel" type="ghost" label="Cancel" onClick={() => {}} />
        <BasicButton htmlId="submit" label="Submit" htmlType="submit" htmlForm="aform" />
      </footer>
    </div>
  );
}
