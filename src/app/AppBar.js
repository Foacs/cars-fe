import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar as MuiAppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";

import { ApplicationContext, RouterContext, ThemeContext } from "../contexts";
import { labels } from "../resources";
import { ChevronRightIcon, LightModeIcon, MenuIcon, NightModeIcon } from "../resources/icons";
import { AppLabel } from "../resources/images";

const AppBar = () => {

  // region Contexts
  const { switchDrawerOpen } = React.useContext(ApplicationContext);
  const { useBreadcrumbs } = React.useContext(RouterContext);
  const { switchMode, theme, isMobile } = React.useContext(ThemeContext);

  const breadcrumbs = useBreadcrumbs();
  // endregion

  // region State
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const menuOpen = Boolean(anchorEl);
  // endregion

  // region Elements
  // Drawer icon to open/close the drawer in mobile mode
  const drawerIcon = (
    <IconButton id="drawer-button" aria-label="drawer_open" onClick={switchDrawerOpen}>
      <MenuIcon sx={isMobile && { width: "2rem", height: "2rem" }}/>
    </IconButton>
  );

  // Application label
  const applicationLabel = isMobile ? (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="">
        <IconButton disableFocusRipple disableRipple edge="start">
          <AppLabel color={theme.colors.application.label} height="1.5rem"/>
        </IconButton>
      </Link>
    </Box>
  ) : (
    <Link to="">
      <IconButton disableFocusRipple disableRipple edge="start">
        <AppLabel color={theme.colors.application.label} height="1.5rem" width="250px"/>
      </IconButton>
    </Link>
  );

  // Breadcrumbs
  const breadcrumbsElement = (
    <Breadcrumbs itemsAfterCollapse={2} separator={<ChevronRightIcon color="breadcrumbs"/>}>
      <span/>

      {breadcrumbs.parentRoutes.map((route) => (
        <Link key={route.key} to={route.path} style={{ textDecoration: "none" }}>
          <Typography color="text.breadcrumbs.inactive">
            {route.name}
          </Typography>
        </Link>
      ))}
      <Typography color="text.breadcrumbs.active">
        {breadcrumbs.currentRoute.name}
      </Typography>
    </Breadcrumbs>
  );
  // endregion

  // region Render
  return (
    <>
      {/* Application bar */}
      <MuiAppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" spacing={3}>
            {/* Left element (button to open/close the drawer or the application label) */}
            <Grid item xs="auto" sx={{ pl: 16 }}>
              {isMobile ? drawerIcon : applicationLabel}
            </Grid>

            {/* Center element (application label or breadcrumbs) */}
            <Grid item xs>
              {isMobile ? applicationLabel : breadcrumbsElement}
            </Grid>

            {/* Avatar */}
            <Grid item xs="auto">
              <IconButton
                id="menu-button"
                color="white"
                aria-label="menu"
                aria-haspopup="true"
                aria-controls={menuOpen ? "menu" : undefined}
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <Avatar sx={{ ...(isMobile && { width: "2rem", height: "2rem" }) }}/>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </MuiAppBar>

      {/* Menu */}
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={() => setAnchorEl(null)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        MenuListProps={{ "aria-labelledby": "menu-button" }}
        sx={{ mt: "2rem" }}
      >
        <MenuList>
          <MenuItem onClick={switchMode} sx={{ minWidth: "12rem" }}>
            <ListItemIcon>
              {theme.darkMode ? <NightModeIcon/> : <LightModeIcon/>}
            </ListItemIcon>

            <ListItemText>
              {theme.darkMode ? labels.darkMode : labels.lightMode}
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
  // endregion

};

export default AppBar;
