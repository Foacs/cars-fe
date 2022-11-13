import React from "react";

import { Button, Grid, Paper } from "@mui/material";

import { AlertContext } from "../contexts";
import { severities } from "../resources";

const Home = () => {
  // region Contexts
  const { sendAlert } = React.useContext(AlertContext);
  // endregion

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            neque lectus, bibendum non risus sit amet, lobortis fermentum dolor.
            Quisque justo mi, auctor vel iaculis sit amet, commodo ac elit.
            Donec sollicitudin felis in augue mattis hendrerit. Mauris porta
            nulla vel mi mattis, in pulvinar erat mollis. Duis turpis leo,
            pellentesque non pharetra et, tristique id velit. Nunc consequat
            neque eget auctor suscipit. Morbi at mi tortor. Duis vitae sem
            maximus, efficitur mi at, consectetur velit. In eu ligula et ex
            sagittis tempor eget id felis. Praesent et purus ut tortor imperdiet
            accumsan sit amet at nibh. Nulla cursus lorem sit amet dignissim
            bibendum. Nulla vestibulum arcu lobortis metus volutpat semper.
            Vivamus ultricies, magna vel vulputate maximus, metus metus
            vulputate lorem, ut faucibus dolor nisi ac est. Sed consequat mollis
            consequat. Integer imperdiet tortor id metus fermentum commodo.
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: "1rem" }}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            vitae arcu vel mi pretium gravida non sit amet lacus. Mauris vitae
            pellentesque sem. Praesent ipsum nisl, mattis mattis leo sit amet,
            efficitur viverra mi. Phasellus et hendrerit mauris. Cras auctor
            arcu et quam dapibus suscipit. Etiam pharetra tempor nibh, sit amet
            maximus massa tempor vitae. Sed sagittis nisl magna, et lobortis
            libero lobortis non. Nam sed scelerisque felis. Suspendisse vitae
            posuere ipsum. Sed consequat leo eget ullamcorper semper. Duis quis
            tincidunt tortor. Nullam odio tortor, interdum sit amet purus non,
            egestas pharetra leo. Donec interdum imperdiet ultrices. Donec sit
            amet congue nisi, quis sollicitudin nibh.
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: "1rem" }}>
            Fusce auctor lacus vel justo lobortis porta. Cras auctor pulvinar
            erat eget dignissim. Aliquam vel arcu ante. Morbi laoreet ex eget
            metus lobortis elementum. Nullam vehicula, magna eget tempus
            finibus, neque enim vulputate turpis, eget consequat velit nisi at
            neque. Phasellus commodo iaculis tortor sed finibus. Proin ut enim
            tristique, cursus dolor eget, egestas ex. Proin auctor pulvinar
            metus, at gravida eros vestibulum non.
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: "1rem" }}>
            Nullam ac egestas risus. Vestibulum ullamcorper pretium arcu, eu
            rhoncus risus. Proin nisl velit, efficitur id nulla ac, hendrerit
            pretium ipsum. Integer et purus tempor, dictum sem ac, vehicula
            metus. Aliquam eget mattis orci. In cursus ipsum nibh, eu convallis
            orci vulputate eget. Fusce lobortis vehicula magna. Cras eget
            vehicula orci, a rutrum tortor. Nulla facilisi. Duis sodales et
            velit at luctus. Nam ornare fringilla felis, et volutpat nisl
            interdum quis. Ut sit amet rutrum eros, non scelerisque dolor.
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
};

export default Home;
