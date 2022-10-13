import React from "react";
import { IconButton, BasicButton } from "@productplan/atlas";

/** Static Example */
export default function ExampleDialogBox() {
  return (
    <div className="ModalDialog">
      <header className="ModalDialog__header">
        <div>
          <h1 className="ModalDialog__title">Title</h1>
          <p className="ModalDialog__subtitle">Subtitle</p>
        </div>
        <IconButton faClass="fa-times" onClick={() => {}} />
      </header>
      <section className="ModalDialog__body">
        Children render in the body
      </section>
      <footer className="ModalDialog__footer">
        <BasicButton htmlId="cancel" type="ghost" label="Cancel" onClick={() => {}} />
        <BasicButton htmlId="submit" label="Submit" htmlType="submit" htmlForm="aform" />
      </footer>
    </div>
  );
}
