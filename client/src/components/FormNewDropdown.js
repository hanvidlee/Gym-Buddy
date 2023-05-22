import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FormNewDropdown = ({index, exerciseList, exerciseSets, setExerciseSets}) => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  return (
    <Autocomplete
      key={`combo-box-demo-${index}`}
      className="form-dropdown"
      disablePortal
      id="combo-box-demo"
      options={exerciseList}
      align="right"
      onChange={(event, newValue) => {
        setValue(newValue);
        const updatedExerciseSets = [...exerciseSets];
        updatedExerciseSets[index] = {
          ...updatedExerciseSets[index],
          exercise: newValue
        };
        setExerciseSets(updatedExerciseSets);
      }}
      value={value}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}

          label="Exercises"
          InputLabelProps={{
            shrink: true
          }}
          sx={{
            maxWidth: "auto",
            '& .MuiInputBase-input': {
              fontSize: '13px',
              padding: '4px 3px',
            },
          }}
        />
      )}
    />
  );
}

export default FormNewDropdown

