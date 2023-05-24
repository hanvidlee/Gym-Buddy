import React from "react";
import ExerciseProgress from "./ExerciseProgress";
import TopFiveExercises from "./TopFiveExercises";
import WorkoutsByMonth from "./WorkoutsByMonth";
import NumOfWorkouts from "./NumOfWorkouts";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box"
import '../Home.scss';

export default function Analytics({ numWorkouts, topFiveExercises, exerciseProgress, workoutsByMonth }) {
  return (
    <CardContent class="home-wrapper">
      <Box sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(1, 1fr)',
      }}>
        <NumOfWorkouts count={numWorkouts} />
        <WorkoutsByMonth workouts={workoutsByMonth} />
        <TopFiveExercises exercises={topFiveExercises} />
        <ExerciseProgress exercises={exerciseProgress} />
      </Box>
    </CardContent>
  );
}