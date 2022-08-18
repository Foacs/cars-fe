import React from "react";
import ReactDOM from "react-dom/client";

import { Application } from "./app";
import { RouterContextProvider, ThemeContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterContextProvider>
        <Application />
      </RouterContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
