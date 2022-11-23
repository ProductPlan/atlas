import { render } from "preact";
import { App } from "./app";
import "./index.css";
import "@productplan/atlas-tokens/dist/styles/tokens.css";

render(<App />, document.getElementById("app"));
