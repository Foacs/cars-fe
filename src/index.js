import React from "react";
import ReactDOM from "react-dom/client";

import { Application } from "./app";
import { ThemeContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Application />
    </ThemeContextProvider>
  </React.StrictMode>
);
