import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function homeTest(props) {
  const user = props.user
  // console.log('username:', user[0].username); // you have to grab the username like so in order to retrieve it

  const workouts = props.dailyWorkouts // the output is array of objects, map over them and set id as key
  console.log('workouts ', workouts);

  return (
    <>
    <h1>Dashboard</h1>
    <p>Date</p>
    <Link to="/calendar"><Button>Add Workout</Button></Link>
      
      <Card sx={{ paddingBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
        <CardHeader
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Starting my weight loss journey!!
          </Typography>
        </CardContent>
        <>
          <Button variant="contained">View Details</Button>
        </>
      </Card>
    </>
  );
}