import React from "react";
import { cleanup } from "@testing-library/react";

global.afterEach(cleanup);
global.React = React;
