import React from "react";
import ReactDOM from "react-dom/client";

import { Application } from "./app";
import { AlertContextProvider, RouterContextProvider, ThemeContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterContextProvider>
        <AlertContextProvider>
          <Application />
        </AlertContextProvider>
      </RouterContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
