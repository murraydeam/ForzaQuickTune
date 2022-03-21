import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label">Drive Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="FWD" control={<Radio />} label="FWD" />
        <FormControlLabel value="AWD" control={<Radio />} label="AWD" />
        <FormControlLabel value="RWD" control={<Radio />} label="RWD" />
        
      </RadioGroup>
    </FormControl>
  );
}
