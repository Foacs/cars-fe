import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { RouterContext, ThemeContext } from "../contexts";
import { ChevronLeftIcon, ChevronRightIcon } from "../resources/icons";

const Drawer = () => {
  // region Contexts
  const { primaryPagesRoutes, secondaryPagesRoutes, useBreadcrumbs } =
    React.useContext(RouterContext);
  const { theme } = React.useContext(ThemeContext);
  // endregion

  // region State
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  // endregion

  // region Fields
  const breadcrumbs = useBreadcrumbs();
  // endregion

  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: `${
          drawerOpen
            ? theme.dimensions.drawer.width.open
            : theme.dimensions.drawer.width.closed
        }`,
        ...(drawerOpen
          ? theme.transitions.drawer.open
          : theme.transitions.drawer.close),
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: `${
            drawerOpen
              ? theme.dimensions.drawer.width.open
              : theme.dimensions.drawer.width.closed
          }`,
          ...(drawerOpen
            ? theme.transitions.drawer.open
            : theme.transitions.drawer.close),
        },
      }}
    >
      {/* Empty toolbar to shift the content */}
      <Toolbar />

      <List>
        {/* Primary pages menu items */}
        {primaryPagesRoutes.map((primaryRoute) => (
          <ListItem key={primaryRoute.key} disablePadding>
            <ListItemButton
              selected={Boolean(
                breadcrumbs.routes.find(
                  (route) => route.key === primaryRoute.key
                )
              )}
              component={Link}
              to={primaryRoute.path}
            >
              <ListItemIcon>{primaryRoute.icon}</ListItemIcon>
              <ListItemText>{primaryRoute.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        {/* Secondary pages menu items */}
        {secondaryPagesRoutes
          .filter((secondaryRoute) =>
            breadcrumbs.routes.find(
              (route) => route.key === secondaryRoute.parentKey
            )
          )
          .map((secondaryRoute) => (
            <ListItem key={secondaryRoute.key} disablePadding>
              <ListItemButton
                selected={Boolean(
                  breadcrumbs.routes.find(
                    (route) => route.key === secondaryRoute.key
                  )
                )}
                component={Link}
                to={secondaryRoute.path}
              >
                <ListItemIcon>{secondaryRoute.icon}</ListItemIcon>
                <ListItemText>{secondaryRoute.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>

      {/* Button to expand/collapse the drawer */}
      <Box
        sx={{
          alignItems: "center",
          bottom: "0",
          display: "flex",
          justifyContent: "flex-end",
          padding: theme.spacing(1, 1),
          position: "absolute",
          width: "100%",
        }}
      >
        <IconButton
          id="long-button"
          color="inherit"
          aria-label="Drawer"
          aria-controls={drawerOpen ? "long-menu" : undefined}
          aria-expanded={drawerOpen ? "true" : undefined}
          aria-haspopup="true"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
