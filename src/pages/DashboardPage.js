import React from "react";

import { Button, Grid, Paper, Typography } from "@mui/material";

import { AlertContext } from "../contexts";
import { severities } from "../resources";
import { UnderConstructionIcon } from "../resources/icons";

const DashboardPage = () => {

  // region Contexts
  const { sendAlert } = React.useContext(AlertContext);
  // endregion

  // region Render
  return (
    <>
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
              5 dernières interventions en retard
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

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: "1rem", textAlign: "center" }}>
            <Typography>
              5 dernières interventions en cours
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: "1rem", textAlign: "center" }}>
            <Typography>
              5 dernières commandes en cours
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Button
        color="info"
        onClick={sendAlert("Information", severities.info)}
        sx={{ mt: "1rem", mr: "1rem" }}
        variant="outlined"
      >
        Info
      </Button>

      <Button
        color="success"
        onClick={sendAlert("Succès", severities.success)}
        sx={{ mt: "1rem", mr: "1rem" }}
        variant="outlined"
      >
        Succès
      </Button>

      <Button
        color="warning"
        onClick={sendAlert("Avertissement", severities.warning)}
        sx={{ mt: "1rem", mr: "1rem" }}
        variant="outlined"
      >
        Avertissement
      </Button>

      <Button
        color="error"
        onClick={sendAlert("Erreur", severities.error)}
        sx={{ mt: "1rem" }}
        variant="outlined"
      >
        Erreur
      </Button>
    </>
  );
  // endregion

};

export default DashboardPage;
