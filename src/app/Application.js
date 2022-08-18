import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from "@mui/material";

import AppBar from "./AppBar";
import BottomNavigation from "./BottomNavigation";
import Drawer from "./Drawer";
import ErrorHandler from "./ErrorHandler";

import { RouterContext, ThemeContext } from "../contexts";

function Application() {
  // region Contexts
  const { routes } = React.useContext(RouterContext);
  const { theme, isMobile } = React.useContext(ThemeContext);
  // endregion

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <ErrorHandler>
          <Box display="flex">
            <CssBaseline />

            {/* Application bar */}
            <AppBar />

            {/* Navigation */}
            {isMobile ? <BottomNavigation /> : <Drawer />}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {/* Empty toolbar to shift the content */}
              <Toolbar />

              {/* Content */}
              <Container maxWidth="lg" sx={{ mt: 3, mb: isMobile ? 9 : 3 }}>
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.key}
                      exact
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </Container>
            </Box>
          </Box>
        </ErrorHandler>
      </ThemeProvider>
    </HashRouter>
  );
}

export default Application;
