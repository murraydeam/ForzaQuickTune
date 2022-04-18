import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import Sliders from "./Sliders";

const Body = () => {
  return (
    <Container className="body">
      <Box sx={{ my: 6 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum
        hic voluptatum cupiditate, laborum nihil ipsam quam ab suscipit aut
        reprehenderit dolorum asperiores impedit. Molestias quibusdam adipisci
        deleniti possimus impedit magni architecto nemo tempora, ex, deserunt
        recusandae eligendi velit numquam rerum facere dolorum minus inventore.
      </Box>
      <Box sx={{ my: 12 }}>
        <Sliders />
      </Box>
    </Container>
  );
};

export default Body;
