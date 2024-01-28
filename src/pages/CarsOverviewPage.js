import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import { UnderConstructionIcon } from "../resources/icons";

const CarsOverviewPage = () => {

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

      <Grid item xs={12} md={8}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Informations globales
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            5 dernières voitures en retard
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            5 dernières voitures favorites
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            5 dernières voitures en cours
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Toutes les voitures avec pagination
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
  // endregion

};

export default CarsOverviewPage;
