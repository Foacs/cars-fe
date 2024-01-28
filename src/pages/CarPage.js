import React from "react";
import { useParams } from "react-router-dom";

import { Grid, Paper, Typography } from "@mui/material";

import { UnderConstructionIcon } from "../resources/icons";

const CarPage = () => {

  // region Fields
  const params = useParams();
  // endregion

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
                Et de toute façon, la voiture {params.id} n'existe pas encore!
                <br/>
                <br/>
                Revenez plus tard!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Avatar
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Informations de la voiture
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Interventions
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Commentaires
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <Typography>
            Commandes
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
  // endregion

};

export default CarPage;
