import React from "react";
import { Link } from "react-router-dom";

import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

import { RouterContext } from "../contexts";

const BottomNavigation = () => {
  // region Contexts
  const { primaryPagesRoutes, useBreadcrumbs } =
    React.useContext(RouterContext);
  // endregion

  // region Fields
  const breadcrumbs = useBreadcrumbs();
  // endregion

  return (
    <Paper
      elevation={3}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <MuiBottomNavigation
        value={primaryPagesRoutes.findIndex((primaryRoute) =>
          Boolean(
            breadcrumbs.routes.find((route) => route.key === primaryRoute.key)
          )
        )}
      >
        {primaryPagesRoutes.map((route) => (
          <BottomNavigationAction
            key={route.key}
            component={Link}
            to={route.path}
            icon={route.icon}
            label={route.name}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;
