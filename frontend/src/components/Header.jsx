import { Container } from "@mui/material";
import { Button, Box } from "@mui/material";

const Header = () => {
  return (
    <div className="header-content">
      <div className="header-bg">
        <div className="header-button">
          <Button
            variant="contained"
            sx={{
              
              height: 100,
              margin: {
                xs:4,
                sm:2,
                md:2,
                lg:4,
                xl:2,
              },
              width: {
                xs: 80,
                sm: 120,
                md: 180,
                lg: 240,
                xl: 300,
              },
            }}
          >
            Begin Tuning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
