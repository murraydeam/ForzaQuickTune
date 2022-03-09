import * as React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


export default function SliderSizes() {
  return (
    <div className="sliders">
      <Box width={300}>
        <div className="weight-slider">
          <h1>Weight Slider</h1>
          <Slider
            defaultValue={3200}
            min={1000}
            max={10000}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
        <div className="bias-slider">
          <h1>Bias Slider</h1>
          <Slider
            defaultValue={60}
            min={20}
            max={80}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </Box>
    </div>
  );
}
