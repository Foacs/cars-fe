import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import { UnderConstructionIcon } from "../resources/icons";

const NotFoundPage = () => {

  // region Render
  return (
    <Paper sx={{ p: "1rem", textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UnderConstructionIcon sx={{
            fontSize: "10rem",
            "@keyframes rotate": { to: { transform: "rotate(360deg)" } },
            animation: "rotate 10s linear infinite",
            animationDelay: "3s"
          }}/>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            Désolé, cette page est actuellement en construction...
            <br/>
            <br/>
            Et oui, même la page 404!
            <br/>
            <br/>
            Revenez plus tard!
            <br/>
            <br/>
            ... Enfin, pas ici!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
  // endregion

};

export default NotFoundPage;
