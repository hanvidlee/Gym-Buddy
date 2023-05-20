import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import DropdownMenu from './DropDownMenu';
import Autocomplete from '@mui/material/Autocomplete';
import "./Form.scss";



export default function FormTest() {

  const [selectedImage, setSelectedImage] = useState(null);

  const [workout, setWorkout] = useState({
    title: "",
    picture: "",
    description: ""
  });

  const [exercises, setExercises] = useState([
    "squat", "push ups", "sit ups"
  ]);

  const [exerciseSets, setExerciseSets] = useState([
    {
      exercise: "",
      reps: 10,
      quantity: 4,
      weight: 100
    }
  ]);

  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      workout, exerciseSets
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <h2>Workout Form</h2>
        {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
            value={workout.picture}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            hidden
          />
        </Button>

        <TextField
          required
          label="Workout Title"
          value={workout.title}
          onChange={(event) => setWorkout({ ...workout, title: event.target.value })}
          defaultValue=""
        />
        <TextField
          label="Picture"
          value={workout.picture}
          onChange={(event) => setWorkout({ ...workout, picture: event.target.value })}
        />
        <TextField
          label="Description"
          value={workout.description}
          onChange={(event) => setWorkout({ ...workout, description: event.target.value })}
        />
        <div>
          {exerciseSets.map((es, index) => {
            return (
              <React.Fragment>
                <Autocomplete
                  key={`combo-box-demo-${index}`}
                  className="form-dropdown"
                  disablePortal
                  id="combo-box-demo"
                  options={exercises}
                  sx={{ width: 300 }}
                  onChange={(event, newValue) => {
                    setValue(newValue);

                    const updatedExerciseSets = [...exerciseSets];
                    updatedExerciseSets[index] = {
                      ...updatedExerciseSets[index],
                      exercise: newValue
                    };
                    setExerciseSets(updatedExerciseSets);
                  }}
                  value={es.exercise || ""}
                  inputValue={es.exercise}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  renderInput={(params) => <TextField {...params}
                    required
                    label="Exercises"
                  />}
                />
                <TextField
                  required
                  label="Weight"
                  InputProps={{
                    endAdornment: <InputAdornment position="start">lbs</InputAdornment>
                  }}
                  value={es.weight}
                  onChange={(event) => {
                    exerciseSets[index] = { ...exerciseSets[index], weight: event.target.value };
                    setExerciseSets([...exerciseSets]);
                  }}
                />
                <TextField
                  required
                  label="Reps"
                  value={es.reps}
                  onChange={(event) => {
                    exerciseSets[index] = { ...exerciseSets[index], reps: event.target.value };
                    setExerciseSets([...exerciseSets]);
                  }}
                />
                <TextField
                  required
                  label="Sets"
                  value={es.quantity}
                  onChange={(event) => {
                    exerciseSets[index] = { ...exerciseSets[index], quantity: event.target.value };
                    setExerciseSets([...exerciseSets]);
                  }}
                />
              </React.Fragment>
            );
          })
          }
        </div>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => {
          exerciseSets.push({
            exercise: "",
            reps: 0,
            quantity: 0,
            weight: 0
          });

          setExerciseSets([...exerciseSets]);
        }}>Add row</Button>
        <Button type="button" onClick={() => {
          exerciseSets.pop();
          setExerciseSets([...exerciseSets]);
        }}> Delete row </Button>
      </form>
    </React.Fragment>
  );
}
