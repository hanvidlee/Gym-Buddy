import React from "react";

export function Analytics({numWorkouts, topFiveExercises}) {

  console.log('COUNT: ', numWorkouts);
  console.log('TOP FIVE: ', topFiveExercises)

  return(
    <p>Hi from Analytics</p>
  )
}