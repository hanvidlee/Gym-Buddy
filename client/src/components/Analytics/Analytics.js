import React from "react";
import ExerciseProgress from "./ExerciseProgress";
import TopFiveExercises from "./TopFiveExercises";

export default function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {
  // console.log('COUNT: ', numWorkouts);
  // console.log('TOP FIVE: ', topFiveExercises);
  // console.log('WORKOUTS BY MONTH: ', workoutsByMonth);
  // console.log('EXERCISE PROGRESS: ', exerciseProgress);

  return(
    <>
      <h1>Exercise Analytics</h1>
      <TopFiveExercises exercises={topFiveExercises} />
      <ExerciseProgress exercises={exerciseProgress} />
    </>
  )
}