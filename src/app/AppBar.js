import React, { useContext } from "react";
import {
  AppBar as MuiAppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { AppLabel } from "../resources/images";
import { LightModeIcon, MenuIcon, NightModeIcon } from "../resources/icons";
import { labels } from "../resources";
import { ThemeContext } from "../contexts";

const AppBar = () => {
  const { theme, switchMode } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  return (
    <>
      <MuiAppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs="auto">
              <IconButton disableFocusRipple disableRipple edge="start">
                <AppLabel color={theme.colors.application.label} />
              </IconButton>
            </Grid>

            <Grid item xs></Grid>

            <Grid item xs="auto">
              <IconButton
                id="menu-button"
                aria-label="menu"
                aria-haspopup="true"
                aria-controls={menuOpen ? "menu" : undefined}
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="white"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </MuiAppBar>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ "aria-labelledby": "menu-button" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
