import React from 'react';
// import { Autocomplete } from '@mui/material';
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

// const exercises = [
//   { id: 1, exercise: 'Push Ups', weight: 0, quantity: 2, reps: 10 },
//   { id: 2, exercise: 'Push Ups', weight: 0, quantity: 3, reps: 20 },
//   { id: 3, exercise: 'Bench Press', weight: 200, quantity: 5, reps: 5 },
//   { id: 4, exercise: 'Bentover Rows', weight: 250, quantity: 3, reps: 5 },
//   { id: 5, exercise: 'Bentover Rows', weight: 200, quantity: 2, reps: 8 },
//   { id: 6, exercise: 'Sit Ups', weight: 0, quantity: 5, reps: 30 },
//   { id: 7, exercise: 'Shoulder Press', weight: 100, quantity: 5, reps: 8 },
//   { id: 8, exercise: 'Deadlifts', weight: 285, quantity: 3, reps: 5 },
//   { id: 9, exercise: 'Hip Thrusts', weight: 1000, quantity: 2, reps: 15 },
//   { id: 10, exercise: 'Cable Flys', weight: 10, quantity: 6, reps: 12 }
// ];


export default function History({ sets, workouts }) {

  // Note from Dina - props are both arrays of objects. Don't forget to loop around them and pass down the ids as keys! 
  // If there are no ids, then use the index if anything, not sure if that's a thing though. 

  // const exerciseDetails = props.exerciseDetails;      // use for option 2
  // console.log('exerciseDetails', exerciseDetails);

  // const exerciseHistory = props.exerciseHistory;
  // console.log('exerciseHistory ', exerciseHistory);    // use for the drop down portion

  return (
    <>
      {workouts.map((workout) => {
        const setsPerWorkout = sets.filter((set) => Number(set.workout_id) === Number(workout.id));
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