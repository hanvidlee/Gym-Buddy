import React from "react";
import ExerciseProgress from "./ExerciseProgress";

export default function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {
  // console.log('COUNT: ', numWorkouts);
  // console.log('TOP FIVE: ', topFiveExercises);
  // console.log('WORKOUTS BY MONTH: ', workoutsByMonth);
  // console.log('EXERCISE PROGRESS: ', exerciseProgress);

  return(
    <>
      <h1>Exercise Analytics</h1>
      <ExerciseProgress exercises={exerciseProgress} />
    </>
  )
}