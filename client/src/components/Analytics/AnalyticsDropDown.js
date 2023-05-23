import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['option 1', 'option 2'];

export default function AnalyticsDropdown({exercises}) {

  console.log('EXERCISE PROGRESS: ', exercises)

  const exerciseNames = exercises.map((exercise) => {
    return exercise.exercise
  });

  console.log('EXERCISE NAMES: ', exerciseNames)

  const [value, setValue] = useState(exerciseNames[0]);
  const [inputValue, setInputValue] = useState('');

  console.log('VALUE SELECTED: ', value)

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={exerciseNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Exercise" />}
      />
    </div>
  )
};
