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

export default function FormTest(props) {

  const {addWorkout, addSet} = props 
  //workout_id, weight,reps, quantity, exercise
  // props.addSet(workout_id, weight, reps, quantity, exercise);

  const exerciseList = props.exercises;
  console.log('exercise list!!: ', exerciseList);

  const [selectedImage, setSelectedImage] = useState(null);

  const [title, setTitle] = useState('')

  const [description, setDescription] = useState("")

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

   const [weight, setWeight] = useState(0)

   const [reps, setReps] = useState(0)

   const [quantity, setQuantity] = useState(0)

   const [exercise, setExercise] = useState("")



  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addWorkout(1, '2023-05-20', selectedImage, description, title)
    props.addSet(weight, reps, quantity, exercise)
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
            <Button onClick={() => setSelectedImage(null)}>Remove</Button>
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
        <TextField
          required
          label="Workout Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)
          }
          defaultValue=""
        />
        <TextField
          label="Picture"
          value={workout.picture}
          onChange={(event) => setWorkout({ ...workout, picture: event.target.value })}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(event) => setDescription({...description, description: event.target.value})}
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
                  value={weight}
                  onChange={(event) => {
                    setWeight(event.target.value)
                  }}
                />
                <TextField
                  required
                  label="Reps"
                  value={reps}
                  onChange={(event) => {
                    setReps(event.target.value)
                  }}
                />
                <TextField
                  required
                  label="Sets"
                  value={quantity}
                  onChange={(event) => {
                    setQuantity(event.target.value)
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
