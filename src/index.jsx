import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App";
import "./index.less";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "normalize.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
