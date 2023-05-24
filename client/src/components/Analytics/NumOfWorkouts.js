import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function NumOfWorkouts({ count }) {
  const total = count.map((item) => {
    return item.total_workouts;
  });

  console.log('TOTAL: ', total[0]);

  return (
    <Card
      elevation={6}
      sx={{
        paddingBottom: '1em',
        width: '405px',
        margin: '0 auto',
        marginTop: '50px',
        marginBottom: '1em',
        paddingTop: '10px',
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        paddingTop: "1em"
      }}
    >
      <Typography variant="h5" component="div">
        Total Workouts:
      </Typography>
      <Typography variant="h4" component="div">
      {total[0]}
      </Typography>
    </Card>
  );
}
