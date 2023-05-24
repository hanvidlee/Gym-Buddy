import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';

export default function WorkoutsByMonth({ workouts }) {

  const maxCount = Math.max(...workouts.map((workout) => workout.workout_count));

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
      <Typography variant="h5" >Workouts Per Month in 2023</Typography>
      <div>
        <BarChart
          width={350}
          height={300}
          data={workouts}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            tick={{ fill: 'white' }}
            axisLine={{ stroke: 'white' }}
            dataKey={(data) => data.workout_month.toString()} />
          <YAxis
            tick={{ fill: 'white' }}
            axisLine={{ stroke: 'white' }}
            domain={[0, maxCount + 5]} //y-axis range extends beyond the max value by adding buffer of 5 units
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="workout_count" name="Count" fill="#F44236" barSize={20} />
        </BarChart>
      </div>
    </Card>
  );
}
