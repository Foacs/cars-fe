import React from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Paper, Typography } from "@mui/material";

const PageOne = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ textAlign: "center" }}>
      <Grid item>
        <Paper sx={{ p: "1rem" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            This is the page ONE
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
            <Grid item xs={12} md={4}>
              <Button component={Link} to="/one/one">
                ONE
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button component={Link} to="/one/two">
                TWO
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                component={Link}
                to={`/one/${Math.floor(Math.random() * 10)}`}
              >
                Random
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PageOne;
