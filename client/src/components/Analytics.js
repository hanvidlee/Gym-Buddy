import React from "react";

export function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {

  console.log('COUNT: ', numWorkouts);
  console.log('TOP FIVE: ', topFiveExercises);
  console.log('EXERCISE PROGRESS: ', exerciseProgress);
  console.log('WORKOUTS BY MONTH: ', workoutsByMonth);

  return(
    <p>Hi from Analytics</p>
  )
}