import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import { UnderConstructionIcon } from "../resources/icons";

const BillsSearchPage = () => {

  // region Render
  return (
    <Paper sx={{ p: "1rem", textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UnderConstructionIcon sx={{ fontSize: "10rem" }}/>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            Désolé, cette page est actuellement en construction...
            <br/>
            <br/>
            Revenez plus tard!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
  // endregion

};

export default BillsSearchPage;
