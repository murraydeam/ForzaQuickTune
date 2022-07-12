import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Sliders from "./Sliders";

const Body = () => {
  return (
    <Container className="body">
      <Box sx={{ my: 6 }}>
        <h1>
        Below, select your vehicles weight and weight bias to begin getting your base tune!
        </h1>
         
      </Box>
      <Box sx={{ my: 12 }}>
        <Sliders />
      </Box>
    </Container>
  );
};

export default Body;
