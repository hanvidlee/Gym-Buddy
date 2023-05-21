import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Home({
  workouts
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Date</p>
      <Link to="/calendar"><Button>Add Workout</Button></Link>
      {workouts.map((workout) => {
        return (
          <Card key={`workout-${workout.id}`} sx={{ paddingBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
            <CardHeader
              subheader={workout.date}
            />
            <CardContent>
              <Typography>
                {workout.title}
              </Typography>
              <CardMedia
                component="img"
                height="100"
                image={workout.picture_url}
              />
              <Typography variant="body2" color="text.secondary">
                {workout.description}
              </Typography>
            </CardContent>
            <Link to={`/log/show/${workout.id}`}><Button variant="contained">View Details</Button></Link>
          </Card>
        );
      })}
    </div>
  );
}