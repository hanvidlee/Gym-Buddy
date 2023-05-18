import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Chorizo"
        subheader="September 14, 2016"
      />
      <CardContent>
        {exercises.map(e => {
          return (
            <>
              <Typography variant="body2" color="text.secondary">
                {e.exercise} {e.weight} lbs {e.reps}x {e.quantity} sets
              </Typography>
            </>
          );
        })}
        <Link to="/log/view">
          <Button variant="contained">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}