import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const testExercises = [
  { id: 1, exercise: 'Push Ups', weight: 0, quantity: 2, reps: 10 },
  { id: 2, exercise: 'Push Ups', weight: 0, quantity: 3, reps: 20 },
  { id: 3, exercise: 'Bench Press', weight: 200, quantity: 5, reps: 5 },
  { id: 4, exercise: 'Bentover Rows', weight: 250, quantity: 3, reps: 5 },
  { id: 5, exercise: 'Bentover Rows', weight: 200, quantity: 2, reps: 8 },
  { id: 6, exercise: 'Sit Ups', weight: 0, quantity: 5, reps: 30 },
  { id: 7, exercise: 'Shoulder Press', weight: 100, quantity: 5, reps: 8 },
  { id: 8, exercise: 'Deadlifts', weight: 285, quantity: 3, reps: 5 },
  { id: 9, exercise: 'Hip Thrusts', weight: 1000, quantity: 2, reps: 15 },
  { id: 10, exercise: 'Cable Flys', weight: 10, quantity: 6, reps: 12 }
];

const testTitle = "Chorizo";

// const testDate = "05/04/2022";

const testDescription = "Starting my weight loss journey!!";

export default function FormShow({
  exercises = testExercises,
  title = testTitle,
  date,
  description = testDescription,
  updateSet,
  deleteSet,
  updateWorkout,
  deleteWorkout,
}) {
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [dateState, setDateState] = useState(date);
  const [exercisesState, setExercisesState] = useState(exercises);
  const [isEditMode, setIsEditMode] = useState(false);
  console.log('dateState', dateState)
  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  const onEditSubmit = (event) => {
    for (let i = 0; i < exercises.length; i++) {
      // console.log(event.target[`exercise-${i}`].value)
      console.log(event.target[`weight-${i}`].value);
      console.log(event.target[`quantity-${i}`].value);
      console.log(event.target[`reps-${i}`].value);
    }
    setIsEditMode(false);
  };

  const onHandleChange = (newValue, i) => {
    setExercisesState(prev => {
      const key = Object.keys(newValue)[0];
      const newPrev = [...prev];

      newPrev[i][key] = newValue[key];
      return newPrev;
    });
  };

  //needs api functionality
  const onCancel = () => {
    setIsEditMode(false);
  };

  const onSave = () => {
    setIsEditMode(false);
  };

  return (
    isEditMode ?
      <Card sx={{ marginBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
        <CardContent>
          <TextField
            name="workout-title"
            required
            label="title"
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="start"></InputAdornment>
            }}
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '13px',
                padding: '4px 3px',
              },
            }}
          />
        </CardContent>
        <CardContent>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={dateState}
              onChange={onDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </CardContent>
        <CardContent>
          <TextField
            name="workout-description"
            required
            label="description"
            value={descriptionState}
            onChange={(e) => setDescriptionState(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="start"></InputAdornment>
            }}
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '13px',
                padding: '4px 3px',
              },
            }}
          />
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <form onSubmit={onEditSubmit}>
              <Table size="small" aria-label="a dense table">
                <TableBody>
                  {exercises.map((e, index) => (
                    <TableRow
                      key={e.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {e.exercise}
                      </TableCell>
                      <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                        <TextField
                          name={`weight-${index}`}
                          required
                          label="lbs"
                          value={e.weight}
                          onChange={(e) => onHandleChange({ weight: e.target.value }, index)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start"></InputAdornment>
                          }}
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '13px',
                              padding: '4px 3px',
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                        <TextField
                          name={`quantity-${index}`}
                          required
                          label="x"
                          value={e.quantity}
                          onChange={(e) => onHandleChange({ quantity: e.target.value }, index)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start"></InputAdornment>
                          }}
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '13px',
                              padding: '4px 3px',
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ maxWidth: '55px', padding: '4px 2px' }}>
                        <TextField
                          name={`reps-${index}`}
                          required
                          label="reps"
                          value={e.reps}
                          onChange={(e) => onHandleChange({ reps: e.target.value }, index)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start"></InputAdornment>
                          }}
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '13px',
                              padding: '4px 3px',
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </form>
          </TableContainer>
        </CardContent>
        <Button type="submit" variant="contained" sx={{ backgroundColor: 'green' }} onClick={onSave}>SAVE</Button>
        <Button type="submit" variant="contained" sx={{ backgroundColor: 'red' }}>DELETE</Button>
        <Button variant="contained" onClick={onCancel} >CANCEL</Button>
      </Card> :
      <Card sx={{ marginBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
        <CardHeader
          title={titleState}
          subheader={dateState && dateState.format("MMMM Do YYYY")}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {descriptionState}
          </Typography>
        </CardContent>
        <CardHeader
          title="Workout"
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {exercises.map(e => (
                  <TableRow
                    key={e.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {e.exercise}
                    </TableCell>
                    <TableCell align="right">{e.weight}lbs</TableCell>
                    <TableCell align="right">{e.quantity}x</TableCell>
                    <TableCell align="right">{e.reps}reps</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <Button onClick={() => setIsEditMode(true)} variant="contained">EDIT</Button>
      </Card>
  );
}