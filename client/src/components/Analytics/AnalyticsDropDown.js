import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';

export default function AnalyticsDropdown({ exercises, onExerciseChange }) {

  const exerciseNames = exercises.map((exercise) => {
    return exercise.exercise;
  });

  const uniqueExerciseNames = exerciseNames.filter((name, index) => exerciseNames.indexOf(name) === index);

  const [value, setValue] = useState(uniqueExerciseNames[0]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onExerciseChange(newValue);
  };

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
        PaperComponent={({ children }) => (
          <Paper style={{ background: "#222", color: "white" }}>{children}</Paper>
        )}
        id="controllable-states-demo"
        options={uniqueExerciseNames}
        renderInput={(params) => <TextField {...params} label="Select Exercise"
          InputLabelProps={{
            sx: { color: 'white' },
            shrink: true
          }}
          sx={{
            padding: '0px',
            maxWidth: "300px",
            '& .MuiInputBase-root': {
              height: '27px',
              fontSize: '13px',
              paddingTop: '0px',
            },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            }
          }} />}

      />
    </div>
  );
};
