import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    date: "2023-05-02T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 250
  },
  {
    date: "2023-05-02T04:00:00.000Z",
    exercise: "Bench Press",
    weight: 200
  },
  {
    date: "2023-05-03T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 200
  },
  {
    date: "2023-05-04T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 250
  },
  {
    date: "2023-05-05T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 300
  }
];

export default function ExerciseProgress() {
  
  return (
    <p>Hi from Exercise Progress</p>
  )
}