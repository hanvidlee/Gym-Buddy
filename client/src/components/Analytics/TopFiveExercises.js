import * as React from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function TopFiveExercises({ exercises }) {
  return (
    <Card
      elevation={6}
      sx={{
        paddingBottom: '1em',
        width: '405px',
        margin: '0 auto',
        marginBottom: '1em',
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        paddingTop: "1em"
      }}
    >
      <Typography variant="h5" >Top 5 Exercises</Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", width: "380px" }}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableRow>
            <TableCell >Exercise</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
          <TableBody>
            {exercises.map((exercise, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  {exercise.exercise}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>{exercise.exercise_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
