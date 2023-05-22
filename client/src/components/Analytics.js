import React from "react";

export function Analytics({numWorkouts, topFiveExercises, exerciseProgress}) {

  console.log('COUNT: ', numWorkouts);
  console.log('TOP FIVE: ', topFiveExercises);
  console.log('EXERCISE PROGRESS: ', exerciseProgress);

  return(
    <p>Hi from Analytics</p>
  )
}