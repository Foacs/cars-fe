import React from "react";
import { Grid } from "@mui/material";

import { AppLabel, AppWheel } from "./index";

const AppLogo = ({ center = false, labelColor = "inherit", wheelColor = "inherit" }) => {

  // region Render
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      width={center ? "auto" : "min-content"}
    >
      <Grid item>
        <AppWheel color={wheelColor} size="96px"/>
      </Grid>

      <Grid item>
        <AppLabel color={labelColor}/>
      </Grid>
    </Grid>
  );
  // endregion

};

export default AppLogo;
