import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function NumOfWorkouts({count}) {
  const total = count.map((item) => {
    return item.total_workouts
  })

  console.log('TOTAL: ', total[0])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>Total Workouts</h3>
        <Typography variant="h2" component="div">
          {total[0]}
        </Typography>
      </CardContent>
    </Card>
  );
}
