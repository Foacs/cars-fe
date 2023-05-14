import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Alert, Box, Container, CssBaseline, Slide, Snackbar, ThemeProvider, Toolbar } from "@mui/material";

import AppBar from "./AppBar";
import Drawer from "./Drawer";

import { AlertContext, RouterContext, ThemeContext } from "../contexts";

function Application() {

  // region Contexts
  const { isAlertOpen, alert, onAlertClose, onAlertExited } = React.useContext(AlertContext);
  const { routes } = React.useContext(RouterContext);
  const { theme, isMobile } = React.useContext(ThemeContext);
  // endregion

  // region Render
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Box display="flex">
          <CssBaseline/>

          {/* Application bar */}
          <AppBar/>

          {/* Drawer */}
          <Drawer/>

          <Box component="main" sx={{ flexGrow: 1, p: 3, transition: theme.transitions.drawer }}>
            {/* Empty toolbar to shift the content */}
            <Toolbar/>

            {/* Content */}
            <Container maxWidth="lg" sx={{ mt: 3, mb: isMobile ? 9 : 3 }}>
              <Routes>
                {routes.map(route => <Route key={route.key} exact path={route.path} element={route.element}/>)}
              </Routes>
            </Container>
          </Box>
        </Box>

        {/* Alerts snackbar */}
        <Snackbar
          key={alert ? alert.key : undefined}
          anchorOrigin={{ vertical: "top", horizontal: isMobile ? "center" : "right" }}
          autoHideDuration={5000}
          open={isAlertOpen}
          onClose={onAlertClose}
          sx={{ mt: isMobile ? "4.5rem" : "-1rem", mr: isMobile ? 0 : "4rem" }}
          TransitionComponent={Slide}
          TransitionProps={{ onExited: onAlertExited }}
        >
          <Alert
            onClose={onAlertClose}
            severity={alert ? alert.severity : undefined}
            style={{ background: alert ? theme.palette[`${alert.severity}`].background : undefined }}
            variant="outlined"
          >
            {alert ? alert.message : undefined}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </HashRouter>
  );
  // endregion

}

export default Application;
