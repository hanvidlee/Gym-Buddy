import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FormTest(props) {

  const exerciseList = props.exercises;
  console.log('exercise list!!: ', exerciseList);

  const [selectedImage, setSelectedImage] = useState(null);

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState("");

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
      reps: 0,
      quantity: 0,
      weight: 0
    }
  ]);

  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addWorkout(1, '2023-05-20', selectedImage, description, title);
    exerciseSets.forEach((set) => {
      const { weight, reps, quantity, exercise } = set;
      props.addSet(1, weight, reps, quantity, exercise);
    });
  };

  return (
    <Card elevation={6} sx={{ marginBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
      <CardContent>    <form onSubmit={onSubmit}>
        <Typography variant="h6">Workout Form</Typography>
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
              value={selectedImage}
            />
            <br />
            <Button onClick={() => setSelectedImage(null)}>Remove</Button>
          </div>
        )}

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
          value={selectedImage}
          onChange={(event) => setWorkout({ ...workout, picture: event.target.value })}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(event) => setDescription({ ...description, description: event.target.value })}
        />
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {exerciseSets.map((es, index) => {
                return (
                  <TableRow >
                    <TableCell>
                      <Autocomplete
                        key={`combo-box-demo-${index}`}
                        className="form-dropdown"
                        disablePortal
                        id="combo-box-demo"
                        options={exercises}
                        align="right"
                        sx={{
                          '& .MuiInputBase-input': {
                            fontSize: '13px',
                            padding: '4px 3px',
                          },
                        }}
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
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            label="Exercises"
                          />
                        )}
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                      <TextField
                        required
                        label="lbs"
                        InputProps={{
                          endAdornment: <InputAdornment position="start"></InputAdornment>
                        }}
                        value={es.weight}
                        sx={{
                          '& .MuiInputBase-input': {
                            fontSize: '13px',
                            padding: '4px 3px',
                          },
                        }}
                        onChange={(event) => {
                          const updatedExerciseSets = [...exerciseSets];
                          updatedExerciseSets[index] = {
                            ...updatedExerciseSets[index],
                            weight: event.target.value
                          };
                          setExerciseSets(updatedExerciseSets);
                        }}
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                      <TextField
                        required
                        label="x"
                        value={es.quantity}
                        sx={{
                          '& .MuiInputBase-input': {
                            fontSize: '13px',
                            padding: '4px 3px',
                          },
                        }}
                        onChange={(event) => {
                          const updatedExerciseSets = [...exerciseSets];
                          updatedExerciseSets[index] = {
                            ...updatedExerciseSets[index],
                            quantity: event.target.value
                          };
                          setExerciseSets(updatedExerciseSets);
                        }}
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                      <TextField
                        required
                        label="reps"
                        value={es.reps}
                        sx={{
                          '& .MuiInputBase-input': {
                            fontSize: '13px',
                            padding: '4px 3px',
                          },
                        }}
                        onChange={(event) => {
                          const updatedExerciseSets = [...exerciseSets];
                          updatedExerciseSets[index] = {
                            ...updatedExerciseSets[index],
                            reps: event.target.value
                          };
                          setExerciseSets(updatedExerciseSets);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      </CardContent>
        <Button type="submit" variant="contained" sx={{ backgroundColor: 'green' }}>Submit</Button>
        <Button type="button" variant="contained" sx={{ margin: "0 1em" }} onClick={() => {
          setExerciseSets([
            ...exerciseSets,
            {
              exercise: "",
              reps: 0,
              quantity: 0,
              weight: 0
            }
          ]);

        }}>Add row</Button>
        <Button type="button" variant="contained" sx={{ backgroundColor: 'red' }} onClick={() => {
          const updatedExerciseSets = [...exerciseSets];
          updatedExerciseSets.pop();
          setExerciseSets(updatedExerciseSets);
        }}> Delete row </Button>
    </Card>
  );
}
