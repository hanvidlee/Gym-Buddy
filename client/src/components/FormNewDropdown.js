import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';

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
      PaperComponent={({ children }) => (
        <Paper style={{ background: "#222", color: "white" }}>{children}</Paper>
      )}
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
          required
          {...params}

          label="Exercises"
          InputLabelProps={{
            sx: { color: 'white' },
            shrink: true
          }}
          sx={{
            padding: '0px',
            minWidth: "180px",
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
          }}
        />
      )}
    />
  );
}

export default FormNewDropdown

