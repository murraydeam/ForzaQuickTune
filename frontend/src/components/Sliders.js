import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import "./styles.css";

export default function SliderSizes() {
  const [weight, setWeight] = useState(3200);
  const [bias, setBias] = useState(60);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
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
          min={1000}
          max={10000}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          sx
        />
      
      </Grid>
      <Grid item xs={6} md={8}>
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
          min={0}
          max={100}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={bias}
          onChange={(e) => setBias(e.target.value)}
          sx
        />
      
      </Grid>
    </Grid>
  );
}
