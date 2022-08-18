import React from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Paper, Typography } from "@mui/material";

const SubPageTwoTwo = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ textAlign: "center" }}>
      <Grid item>
        <Paper sx={{ p: "1rem" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            This is the page TWO/TWO
          </Typography>
        </Paper>
      </Grid>

      <Grid item>
        <Paper sx={{ p: "1rem" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={12} md={12}>
              <Button component={Link} to="/two">
                BACK
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SubPageTwoTwo;
