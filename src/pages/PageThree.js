import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

const PageThree = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ textAlign: "center" }}>
      <Grid item>
        <Paper sx={{ p: "1rem" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            This is the page THREE
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PageThree;
