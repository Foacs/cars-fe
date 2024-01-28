import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Collapse,
  Divider,
  Drawer as MuiDrawer,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { ApplicationContext, RouterContext, ThemeContext } from "../contexts";
import { utils } from "../resources";
import { ChevronDownIcon, ChevronUpIcon, LeftArrowIcon, RightArrowIcon } from "../resources/icons";

const Drawer = () => {

  // region Contexts
  const { isDrawerOpen, switchDrawerOpen } = React.useContext(ApplicationContext);
  const { routes, useBreadcrumbs } = React.useContext(RouterContext);
  const { isMobile, theme } = React.useContext(ThemeContext);

  const breadcrumbs = useBreadcrumbs();
  // endregion

  // region Fields
  const menuGroups = [
    { key: "cars", label: "Voitures" },
    { key: "interventions", label: "Interventions" },
    { key: "orders", label: "Commandes" },
    { key: "workshop", label: "Atelier" },
  ];
  // endregion

  // region State
  const [ isDrawerExtended, setDrawerExtended ] = React.useState(true);
  const [ collapsedGroups, setCollapsedGroups ] = React.useState(new Map(menuGroups.map(group => [ group.key, true ])));
  const [ isTransitionActive, setTransitionActive ] = React.useState(false);

  // Compute the drawer width
  let drawerWidth = isDrawerExtended ? theme.dimensions.drawer.width.extended : theme.dimensions.drawer.width.compact;

  // Function to switch the collapsed state of a menu group from its key
  const switchGroup = key => setCollapsedGroups(new Map(collapsedGroups.set(key, !collapsedGroups.get(key))));

  // Function to perform the transition to expand or collapse the drawer
  const performTransition = () => {
    setDrawerExtended(!isDrawerExtended);
    setTransitionActive(true);
    setTimeout(() => setTransitionActive(false), 500);
  };
  // endregion

  // region Functions
  // Function to render a group of routes as a list with a button to collapse it
  const renderMenuGroup = (group, items) => (
    <List key={group.key}>
      <ListItemButton onClick={() => switchGroup(group.key)}
        sx={{ p: "6px", pl: "1rem", borderRadius: theme.shape.borderRadius }}>
        <ListItemText primary={group.label}/>

        {collapsedGroups.get(group.key) ? <ChevronUpIcon/> : <ChevronDownIcon/>}
      </ListItemButton>

      <Collapse in={collapsedGroups.get(group.key)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items}
        </List>
      </Collapse>
    </List>
  );

  // Function to render a route as a list item
  const renderMenuItem = route => (
    <ListItem key={route.key} disablePadding>
      <ListItemButton
        selected={breadcrumbs.currentRoute.key === route.key}
        component={Link}
        to={route.path}
        sx={{ p: "0.5rem 1rem 0.5rem 1.5rem", m: "2px 0", borderRadius: theme.shape.borderRadius }}
      >
        <ListItemIcon>{route.menuProperties.icon}</ListItemIcon>

        <ListItemText>{route.menuProperties.name || route.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );

  // Function to render a compact route as a list item
  const renderCompactMenuItem = (route) => (
    <ListItem key={route.key} disablePadding>
      <ListItemButton
        selected={breadcrumbs.currentRoute.key === route.key}
        component={Link}
        to={route.path}
        sx={{ p: "0.5rem 1rem 0.5rem 6px", m: "2px 0", borderRadius: theme.shape.borderRadius }}
      >
        <ListItemIcon sx={{ maxWidth: theme.dimensions.drawer.width.compact }}>
          {route.menuProperties.icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
  // endregion

  // region Render
  return (
    <MuiDrawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isDrawerOpen}
      ModalProps={{ onBackdropClick: switchDrawerOpen }}
      sx={{
        width: drawerWidth,
        transition: theme.transitions.drawer,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: drawerWidth,
          ...(isTransitionActive && { transition: theme.transitions.drawer }),
        },
      }}
    >
      {/* Empty toolbar to shift the content */}
      <Toolbar/>

      {/* Drawer menu with collapsible groups */}
      <Fade in={isDrawerExtended} unmountOnExit timeout={{ enter: 500, exit: 0 }}>
        <Box sx={{ overflow: "auto", p: "0 1rem 112px 1rem" }}>
          <List>
            {routes.filter(route => route.menuProperties?.groupKey === "pre").map(renderMenuItem)}
          </List>

          <Divider/>

          {utils.join(menuGroups.map(group => renderMenuGroup(group, routes
            .filter(route => route.menuProperties?.groupKey === group.key)
            .map(renderMenuItem))), <Divider/>)}

          <Divider/>

          <List>
            {routes.filter(route => route.menuProperties?.groupKey === "post").map(renderMenuItem)}
          </List>
        </Box>
      </Fade>

      {/* Compact drawer menu */}
      <Fade in={!isDrawerExtended} unmountOnExit timeout={{ enter: 500, exit: 0 }}>
        <Box sx={{ overflow: "auto", p: "0.25rem 0.5rem 112px 0.5rem" }}>
          <List>
            {routes.filter((route) => route.menuProperties?.groupKey === "pre").map(renderCompactMenuItem)}

            <Divider/>

            {utils.join(menuGroups.map(group => routes
              .filter(route => route.menuProperties?.groupKey === group.key)
              .map(renderCompactMenuItem)), <Divider/>)}

            <Divider/>

            {routes.filter((route) => route.menuProperties?.groupKey === "post").map(renderCompactMenuItem)}
          </List>
        </Box>
      </Fade>

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
          backgroundImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper} 25%)`,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="drawer_extend"
          onClick={performTransition}
          sx={{ ml: 4 }}
        >
          {isDrawerExtended ? <LeftArrowIcon/> : <RightArrowIcon/>}
        </IconButton>
      </Box>
    </MuiDrawer>
  );
  // endregion

};

export default Drawer;
