import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box className="mastHead">
      <Typography align="center">
        <Button
          href=""
          variant="text"
          sx={{
            color: "black",
            boxShadow: 2,
            p: 2,
            mt: 65,
            ml: 35,
          }}
        >
          Begin tuning
        </Button>
      </Typography>
    </Box>
  );
};

export default Header;
