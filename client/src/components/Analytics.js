import React from "react";
import { LineChart, Line } from 'recharts';

export function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {
  // console.log('COUNT: ', numWorkouts);
  // console.log('TOP FIVE: ', topFiveExercises);
  // console.log('WORKOUTS BY MONTH: ', workoutsByMonth);
  console.log('EXERCISE PROGRESS: ', exerciseProgress);

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
  ]

  // const renderLineChart = (

  // );

  return(
    <p>Hi from Analytics</p>
  )
}