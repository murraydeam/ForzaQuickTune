import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import "./styles.css"

export default function SliderSizes() {
  const [weight, setWeight] = useState(3200);
  const [bias, setBias] = useState(60);

  return (
    <div className="sliders">
        <div className="weight-slider">
            
          
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
          />
        </div>

        <div className="bias-slider">
          <h2>
            Weight Bis (%)
            <TextField
              id="textWeight"
              label="LBS"
              type="number"
              value={bias}
              onChange={(e) => setBias(e.target.value)}
            />
          </h2>
          <Slider
            min={20}
            max={80}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={bias}
            onChange={(e) => setBias(e.target.value)}
          />
          
        </div>
      
    </div>
  );
}
