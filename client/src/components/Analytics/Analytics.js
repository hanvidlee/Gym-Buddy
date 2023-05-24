import React from "react";
import ExerciseProgress from "./ExerciseProgress";
import TopFiveExercises from "./TopFiveExercises";
import WorkoutsByMonth from "./WorkoutsByMonth";
import NumOfWorkouts from "./NumOfWorkouts";
import CardContent from "@mui/material/CardContent";
import '../Home.scss';

export default function Analytics({ numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth }) {

  return (
    <CardContent class="home-wrapper">
      <NumOfWorkouts count={numWorkouts} />
      <WorkoutsByMonth workouts={workoutsByMonth} />
      <TopFiveExercises exercises={topFiveExercises} />
      <ExerciseProgress exercises={exerciseProgress} />
    </CardContent>
  );
}