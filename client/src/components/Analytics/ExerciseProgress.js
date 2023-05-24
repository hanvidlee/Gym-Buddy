import React, { useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';
import AnalyticsDropdown from "./AnalyticsDropDown";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function ExerciseProgress({ exercises }) {
  // format date to show month and day
  const formatAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  };

  // this is for the user selected value from drop down
  const [selectedValue, setSelectedValue] = useState('');

  // pass this to the dropdownmenu so that the change in value is being extracted and passed back to this parent component
  const handleSelectedChange = (value) => {
    setSelectedValue(value);
  };

  // filter the exercises to the selectedValue and pass this list to the bar graph
  const filteredExercises = exercises.filter((exercise) => {
    return exercise.exercise === selectedValue;
  });

  return (
    <Card
      elevation={6}
      sx={{
        paddingBottom: '1em',
        maxWidth: '405px',
        margin: '0 auto',
        marginBottom: '1em',
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white"
      }}
    >
      <Typography>
        Weight Progress in 2023
      </Typography>

      <div>
        <AnalyticsDropdown exercises={exercises} onExerciseChange={handleSelectedChange} />
        <BarChart
          width={350}
          height={300}
          data={filteredExercises}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatAxis} tick={{ fill: 'white' }}
            axisLine={{ stroke: 'white' }} />
          <YAxis
            tick={{ fill: 'white' }}
            axisLine={{ stroke: 'white' }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="weight" name="Weight" fill="#F44236" barSize={20} />
        </BarChart>
      </div>
    </Card>
  );
}
