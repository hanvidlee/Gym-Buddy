import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const exercises = [
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

export default function History() {

  return (
    <Card sx={{ paddingBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
      <CardHeader
        title="Chorizo"
        subheader="September 14, 2016"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {exercises.map(e => (
                <TableRow
                  key={e.exercise}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {e.exercise}
                  </TableCell>
                  <TableCell align="right">{e.weight}lbs</TableCell>
                  <TableCell align="right">{e.quantity} x</TableCell>
                  <TableCell align="right">{e.reps} reps</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Link to="/log/show">
        <Button variant="contained">View Details</Button>
      </Link>
    </Card>
  );
}