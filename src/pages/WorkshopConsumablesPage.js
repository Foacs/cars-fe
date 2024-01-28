import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import { UnderConstructionIcon } from "../resources/icons";

const WorkshopConsumablesPage = () => {

  // region Render
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={12}>
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
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Tous les consommables avec pagination
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
  // endregion

};

export default WorkshopConsumablesPage;
