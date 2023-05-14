import React from "react";
import ReactDOM from "react-dom/client";

import { Application } from "./app";

import {
  AlertContextProvider,
  ApplicationContextProvider,
  RouterContextProvider,
  ThemeContextProvider,
} from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApplicationContextProvider>
    <ThemeContextProvider>
      <RouterContextProvider>
        <AlertContextProvider>
          <Application/>
        </AlertContextProvider>
      </RouterContextProvider>
    </ThemeContextProvider>
  </ApplicationContextProvider>,
);
