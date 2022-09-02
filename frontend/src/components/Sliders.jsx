import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import "./styles.css";

export default function SliderSizes() {
  const [weight, setWeight] = useState(3200);
  const [bias, setBias] = useState(60);
  const frontSpringRate = (((weight * (bias / 100)) / 2) * 0.68).toFixed(2); // The toFixed modifier is added to format the final number.
  const rearSpringRate = (((weight * ((100 - bias) / 100)) / 2) * 0.68).toFixed(
    2
  );

  return (
    <Grid id="Sliders" container spacing={2}>
      <Grid id="weight-slider" item xs={6} md={8}>
        <h2>
          Vehicle Weight (LBS)
          <TextField
            id="textWeight"
            label="LBS"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </h2>
        <Slider
          id="sliderColor"
          min={1000}
          max={10000}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </Grid>
      <Grid id="bias-slider" item xs={6} md={8}>
        <h2>
          Weight Bias (%)
          <TextField
            id="textWeight"
            label="LBS"
            type="number"
            value={bias}
            onChange={(e) => setBias(e.target.value)}
          />
        </h2>

        <Slider
          id="sliderColor"
          min={0}
          max={100}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={bias}
          onChange={(e) => setBias(e.target.value)}
        />
      </Grid>
      <div className="springRateOutput" id="springRateOutput">
        <h2>Below You will find the new find your custom spring rates.</h2>
        <h3>
          This is a base tune, feel free to change the spring rates in 5%
          increments to get this matched to your driving style
        </h3>

        <div className="weightBias-calculation">
          <TextField
            id="outlined-read-only-input"
            label="Front Spring Rate"
            value={frontSpringRate}
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
          <TextField
            id="outlined-read-only-input"
            label="Rear Spring Rate"
            value={rearSpringRate}
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
        </div>
      </div>
    </Grid>
  );
}
