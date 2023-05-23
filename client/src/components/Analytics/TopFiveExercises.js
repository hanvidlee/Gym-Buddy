import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TopFiveExercises.scss';

export default function TopFiveExercises({ exercises }) {
  console.log('TOP FIVE EXERCISES: ', exercises);

  // style={{ backgroundColor: 'white', padding: '20 px' }}
  return (
    <div className="Table">
        <h3>Top 5 Exercises</h3>

      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029 ' }}>
        <Table sx={{ maxWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Exercise</TableCell>
              <TableCell align="right">#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((exercise, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {exercise.exercise}
                </TableCell>
                <TableCell align="right">{exercise.exercise_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
