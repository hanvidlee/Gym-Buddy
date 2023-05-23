import React from "react";
import ExerciseProgress from "./ExerciseProgress";
import TopFiveExercises from "./TopFiveExercises";
import WorkoutsByMonth from "./WorkoutsByMonth";

export default function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {
  // console.log('COUNT: ', numWorkouts);
  // console.log('TOP FIVE: ', topFiveExercises);
  console.log('WORKOUTS BY MONTH: ', workoutsByMonth);
  // console.log('EXERCISE PROGRESS: ', exerciseProgress);

  return(
    <>
      <h1>Exercise Analytics</h1>
      <WorkoutsByMonth workouts={workoutsByMonth} />
      <TopFiveExercises exercises={topFiveExercises} />
      <ExerciseProgress exercises={exerciseProgress} />
    </>
  )
}