import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar id="appBar" className="appBar">
          <Typography variant="h4" component="div">
            Forza Tune
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box sx={{ my: 0 }}></Box>
      </Container>
    </React.Fragment>
  );
}
