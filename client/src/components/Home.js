import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home({ workouts }) {
  console.log(workouts[0])
  return (
    <CardContent class="home-wrapper">
      <Box sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(1, 1fr)',
        paddingTop: "50px",
      }}>
        {workouts.map((workout) => {
          return (
            <Card
              key={`workout-${workout.id}`}
              elevation={6}
              sx={{
                paddingBottom: '1em',
                width: '405px',
                margin: '0 auto',
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white"
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textAlign: 'left' }}
                >
                  {moment(workout.workout_date).format('MMMM Do YYYY')}
                </Typography>
                <Typography sx={{
                  padding: '0',
                  textAlign: 'left',
                  paddingBottom: '0.2em',
                  color: "white"
                }}>
                  {workout.title}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 126, height: 126, marginRight: '1em' }}
                    image={workout.picture_url}
                  />
                  <Typography variant="body2" color="white">
                    {workout.description}
                  </Typography>
                </div>
              </CardContent>
              <Link to={`/log/show/${workout.id}`}>
                <Button variant="contained">View Details</Button>
              </Link>
            </Card>
          );
        })}
      </Box>
    </CardContent>
  );
}
