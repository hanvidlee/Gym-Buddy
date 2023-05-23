import React from "react";
import ExerciseProgress from "./ExerciseProgress";
import TopFiveExercises from "./TopFiveExercises";
import WorkoutsByMonth from "./WorkoutsByMonth";
import NumOfWorkouts from "./NumOfWorkouts";

export default function Analytics({numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth}) {

  return(
    <>
      <h1>Exercise Analytics</h1>
      <NumOfWorkouts count={numWorkouts} />
      <WorkoutsByMonth workouts={workoutsByMonth} />
      <TopFiveExercises exercises={topFiveExercises} />
      <ExerciseProgress exercises={exerciseProgress} />
    </>
  )
}