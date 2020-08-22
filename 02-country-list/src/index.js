import React from "react";
import ReactDom from "react-dom";

import App from "./App";

const root = document.querySelector("#root");

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
