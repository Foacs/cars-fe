import React, { useEffect, useState } from "react";

import { Fade, Grid, Paper, Typography } from "@mui/material";

import { ChatIcon, NoEntrySignIcon } from "../resources/icons";
import { Link } from "react-router-dom";
import { RouterContext } from "../contexts";

const NotFoundPage = () => {

  // region Contexts
  const { routes } = React.useContext(RouterContext);
  // endregion

  // region State
  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    if (counter < 5) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [ counter ]);
  // endregion

  // region Functions
  // Function to render a link to a route
  const renderMenuItem = route => (
    <Fade in={counter >= 5}>
      <Grid key={route.key} item xs={12} md={4}>
        <Grid alignItems="center" justifyContent="space-between" container spacing={2}>
          <Grid item>
            <ChatIcon/>
          </Grid>

          <Grid item xs>
            <Paper sx={{ p: "0.5rem", textAlign: "center" }}>
              <Link to={route.path} style={{ color: "inherit", textDecoration: "none" }}>
                <Typography>
                  {route.notFoundPageMessage}
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
  // endregion

  // region Render
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: "1rem", textAlign: "center" }}>
          <NoEntrySignIcon sx={{
            fontSize: "10rem",
            "@keyframes rotate": { to: { transform: "rotate(360deg)" } },
            animation: "rotate 10s linear infinite",
            animationDelay: "5s",
          }}/>

          <Fade in={counter >= 1}>
            <Typography>
              Oulà, vous semblez perdu!
            </Typography>
          </Fade>

          <Fade in={counter >= 2}>
            <Typography>
              Il n'y a strictement rien à voir par ici.
            </Typography>
          </Fade>

          <Fade in={counter >= 3} sx={{ marginTop: "1rem" }}>
            <Typography>
              On va vous appeler un taxi...
            </Typography>
          </Fade>

          <Fade in={counter >= 4}>
            <Typography>
              Où souhaitez-vous aller?
            </Typography>
          </Fade>
        </Paper>
      </Grid>

      <Grid item xs={12}/>

      {routes.filter(route => route.notFoundPageMessage).map(route => renderMenuItem(route))}
    </Grid>
  );
  // endregion

};

export default NotFoundPage;
