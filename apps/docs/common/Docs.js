import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../data/componentData";

export default function Docs(props) {
  return (
    <div className="Documentation">
      <Navigation
        components={componentData.map((component) => component.name)}
      />
      <ComponentPage component={component} />
    </div>
  );
}
