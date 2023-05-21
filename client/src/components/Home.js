import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Home({
  workouts
}) {
  return (
    <>
      <Link to="/calendar"><Button variant="contained" sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "green" }, margin: "1em" }}>Add Workout</Button></Link>
      {workouts.map((workout) => {
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 126, height: 126, marginRight: "1em" }}
                  image={workout.picture_url}
                />
                <Typography variant="body2" color="text.secondary">
                  {workout.description}
                </Typography>
              </div>
            </CardContent>
            <Link to={`/log/show/${workout.id}`}><Button variant="contained">View Details</Button></Link>
          </Card>
        );
      })}
    </div>
  );
}