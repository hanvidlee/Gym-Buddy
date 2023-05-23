import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['option 1', 'option 2'];

export default function AnalyticsDropdown({exercises, onExerciseChange}) {

  const exerciseNames = exercises.map((exercise) => {
    return exercise.exercise
  });

  const uniqueExerciseNames = exerciseNames.filter((name, index) => exerciseNames.indexOf(name) === index)

  console.log('EXERCISE NAMES: ', exerciseNames)
  console.log('UNIQUE EXERCISE NAMES: ', uniqueExerciseNames)

  const [value, setValue] = useState(uniqueExerciseNames[0]);
  const [inputValue, setInputValue] = useState('');

  console.log('VALUE SELECTED: ', value)

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
