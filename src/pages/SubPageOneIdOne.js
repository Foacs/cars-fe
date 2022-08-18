import React from "react";
import { Link, useParams } from "react-router-dom";

import { Button, Grid, Paper, Typography } from "@mui/material";

const SubPageOneIdOne = () => {
  const params = useParams();

  return (
    <Grid container direction="column" spacing={2} sx={{ textAlign: "center" }}>
      <Grid item>
        <Paper sx={{ p: "1rem" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            This is the page ONE/{params.id}/ONE
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
              <Button component={Link} to={`/one/${params.id}`}>
                BACK
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SubPageOneIdOne;
