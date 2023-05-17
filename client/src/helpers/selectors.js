import dayjs from 'dayjs';

// getWorkoutForDayPerUser - to be used in dashboard, calendar, and log/show
export default function getWorkoutForDayPerUser(state, userId, selectedDate) {
  // currentUser returns the first element that meets the condition
  const currentUser = state.users.find((user) => user.id === userId);

  if (!currentUser) {
    return null;
  }

  // workoutForUser returns shallow copy of user_workouts if the workout is for the current User
  const workoutsForUser = state.user_workouts.filter((userWorkout) => {
    return userWorkout.user_id === currentUser.id;
  });

  // parsedDate
  const parsedSelectedDate = dayjs(selectedDate);

  // matchedDays return shallow copy of days (should only return an array of 1 object)
  const matchedDays = state.days.filter((day) => {
    return (
      parsedSelectedDate.year() === day.year &&
      parsedSelectedDate.format('MMM') === day.month &&
      parsedSelectedDate.date() === day.day
    );
  });

  // workoutsForDay
  const workoutsForDay = state.day_workouts.filter((dayWorkout) => {
    return matchedDays.length > 0 && dayWorkout.day_id === matchedDays[0].id; //retrieve first and only element from matchedDays
  });

  // workouts return an array of workouts for the currentUser and selectedDate
  const workouts = state.workouts.filter((workout) => {
    return (
      workoutsForUser.some(
        (userWorkout) => userWorkout.workout_id === workout.id
      ) &&
      workoutsForDay.some((dayWorkout) => dayWorkout.workout_id === workout.id)
    );
  });

  console.log(`workoutforUSER!: `, workoutsForUser);
  console.log('this is matched date!', matchedDays);
  console.log('workoutsForDAY= ', workoutsForDay);
  console.log('MY FINAL WORKOUTS!!!', workouts);

  return workouts;
}

// getAllWorkoutsPerUser - to be used in dashboard and calendar


// getDaysPerExercise - to be used in history
// geteExerciseSetsPerWorkout - to be used in log/show
