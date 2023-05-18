import { React, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import DropdownMenu from './DropDownMenu';


export default function FormTest () {
  const [workout, setWorkout] = useState({
    title: "title name",
    picture: "",
    description: ""
  });

  const [exercises, setExercises] = useState([
    "squat", "push ups", "sit ups"
  ]);

  const [exerciseSets, setExerciseSets] = useState([
    {
      exercise: "squat",
      reps: 10,
      quantity: 4,
      weight: 100
    }
  ]);

 const onSubmit = (e) => {
    e.preventDefault()
    console.log({
      workout, exerciseSets
    })
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <div>
      <DropdownMenu/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Reps</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            defaultValue="0"
          />
          <FormHelperText id="outlined-weight-helper-text">Number of Repetitions</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Sets</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            defaultValue="0"
          />
          <FormHelperText id="outlined-weight-helper-text">Number of Times Reps is completed</FormHelperText>
        </FormControl>
  </div>
  <Button>Submit</Button>
  </Box>
  )
}