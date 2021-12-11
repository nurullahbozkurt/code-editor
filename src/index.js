import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EditorProvider from "../src/context";

ReactDOM.render(
  <EditorProvider>
    <App />
  </EditorProvider>,

  document.getElementById("root")
);
