import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Sliders from "./Sliders";


const Tune = () => {
  return (
    <Container className="tune-content" id="Tune">
      <Box sx={{ my: 6 }}>
        <h1>
          Below, select your vehicles weight and weight bias to begin getting
          your base tune!
        </h1>
      </Box>
      <Box sx={{ my: 12 }}>
        <Sliders />
       
      </Box>
    </Container>
  );
};

export default Tune;
