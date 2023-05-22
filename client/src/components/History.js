import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function History({ sets, workouts, exerciseHistory }) {
  const exerciseNames = exerciseHistory.map(e => e.exercise)
  const uniqueExerciseNames = exerciseNames.filter((item, index) => exerciseNames.indexOf(item) === index)

  // Note from Dina - props are both arrays of objects. Don't forget to loop around them and pass down the ids as keys! 
  // If there are no ids, then use the index if anything, not sure if that's a thing though. 

  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>History Page</h1>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={uniqueExerciseNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      {workouts.map((workout) => {
        const setsPerWorkout = sets.filter((set) => {
          if (inputValue !== "") {
            return set.exercise === inputValue && Number(set.workout_id) === Number(workout.id)
          }
          return Number(set.workout_id) === Number(workout.id)
        });

        if (setsPerWorkout.length === 0) return null
        return (
          <Card key={`workout-${workout.id}`} elevation={6} sx={{ paddingBottom: "1em", maxWidth: "425px", margin: "0 auto", marginBottom: "1em" }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ textAlign: "left" }} >
                {moment(workout.workout_date).format("MMMM Do YYYY")}
              </Typography>
              <CardHeader
                subheader={workout.title}
                sx={{ padding: "0", textAlign: "left", paddingBottom: "0.2em" }}
              />
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    {setsPerWorkout.map(s => (
                      <TableRow
                        key={s.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {s.exercise}
                        </TableCell>
                        <TableCell align="right">{s.weight}lbs</TableCell>
                        <TableCell align="right">{s.quantity}x</TableCell>
                        <TableCell align="right">{s.reps}reps</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            <Link to={`/log/show/${workout.id}`}><Button variant="contained">View Details</Button></Link>
          </Card>
        );
      })}
    </>
  );
}