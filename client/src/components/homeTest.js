import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function HomeTest() {

  return (
    <>
    <h1>Dashboard</h1>
    <p>Date</p>
    <Link to="/calendar"><Button>Add Workout</Button></Link>
    {/* render  */}
        <CardHeader
          subheader="September 14, 2016"
        />
      <Card sx={{ paddingBottom: "1em", maxWidth: "425px", margin: "0 auto" }}>
        <CardContent>
          <Typography>
            Title
          </Typography>
        <CardMedia
          component="img"
          height="194"
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        />
          <Typography variant="body2" color="text.secondary">
            Starting my weight loss journey!!
          </Typography>
        </CardContent>
        <>
          <Button variant="contained">View Details</Button>
        </>
      </Card>
      {/* end of function */}
    </>
  );
}