import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AnalyticsDropdown({exercises, onExerciseChange}) {

  const exerciseNames = exercises.map((exercise) => {
    return exercise.exercise
  });

  const uniqueExerciseNames = exerciseNames.filter((name, index) => exerciseNames.indexOf(name) === index)

  const [value, setValue] = useState(uniqueExerciseNames[0]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onExerciseChange(newValue);
  }

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={uniqueExerciseNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Exercise" />}
      />
    </div>
  )
};
