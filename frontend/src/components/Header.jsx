import { Button, Box } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          height: 200,
          width: {
            xs: 60,
            sm: 120,
            md: 180,
            lg: 240,
            xl: 300,
          },
          
        }}
      >
        Begin Tunging
      </Button>
    </Box>
  );
};

export default Header;
