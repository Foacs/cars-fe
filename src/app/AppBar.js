import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar as MuiAppBar,
  Breadcrumbs,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { RouterContext, ThemeContext } from "../contexts";
import { labels } from "../resources";
import {
  ChevronRightIcon,
  LightModeIcon,
  MenuIcon,
  NightModeIcon,
} from "../resources/icons";
import { AppLabel } from "../resources/images";

const AppBar = () => {
  // region Contexts
  const { useBreadcrumbs } = React.useContext(RouterContext);
  const { switchMode, theme, isMobile } = React.useContext(ThemeContext);
  // endregion

  // region State
  const [anchorEl, setAnchorEl] = React.useState(null);
  // endregion

  // region Fields
  const breadcrumbs = useBreadcrumbs();
  const menuOpen = Boolean(anchorEl);
  // endregion

  return (
    <>
      {/* Application bar */}
      <MuiAppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" spacing={3}>
            {/* Application label */}
            <Grid item xs="auto">
              <Link to="">
                <IconButton disableFocusRipple disableRipple edge="start">
                  <AppLabel color={theme.colors.application.label} />
                </IconButton>
              </Link>
            </Grid>

            {/* Breadcrumbs */}
            <Grid item xs>
              {!isMobile && (
                <Breadcrumbs
                  itemsAfterCollapse={2}
                  separator={<ChevronRightIcon color="breadcrumbs" />}
                >
                  <span />
                  {breadcrumbs.parentRoutes.map((route) => (
                    <Link
                      key={route.key}
                      to={route.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography color="text.breadcrumbs.inactive">
                        {route.name}
                      </Typography>
                    </Link>
                  ))}
                  <Typography color="text.breadcrumbs.active">
                    {breadcrumbs.currentRoute.name}
                  </Typography>
                </Breadcrumbs>
              )}
            </Grid>

            {/* Menu button */}
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
                <MenuIcon />
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
        <MenuItem onClick={switchMode} sx={{ minWidth: "12rem" }}>
          {theme.darkMode ? <NightModeIcon /> : <LightModeIcon />}
          <Typography sx={{ pl: "1rem" }}>
            {theme.darkMode ? labels.darkMode : labels.lightMode}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppBar;
