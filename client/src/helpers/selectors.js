import dayjs from 'dayjs';

// getWorkoutsRelatedToUser => shallow copy of user_workouts object
function getWorkoutsRelatedToUser(state, userId) {
  // currentUser returns the first element that meets the condition
  const currentUser = state.users.find((user) => user.id === userId);

  if (!currentUser) {
    return null;
  }

  // workoutForUser returns shallow copy of user_workouts if the workout is for the current User
  const workoutsForUser = state.user_workouts.filter((userWorkout) => {
    return userWorkout.user_id === currentUser.id;
  });

  return workoutsForUser;
}

// getWorkoutForDayPerUser - to be used in dashboard, calendar, and log/show
export function getWorkoutForDayPerUser(state, userId, selectedDate) {
  const workoutsForUser = getWorkoutsRelatedToUser(state, userId);

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

  // console.log(`workoutforUSER!: `, workoutsForUser);
  // console.log('this is matched date!', matchedDays);
  // console.log('workoutsForDAY= ', workoutsForDay);
  // console.log('MY FINAL WORKOUTS!!!', workouts);

  return workouts;
}

// getAllWorkoutsPerUser - to be used in dashboard and calendar
export function getAllWorkoutsPerUser(state, userId) {
  const workoutsForUser = getWorkoutsRelatedToUser(state, userId);

  const workouts = state.workouts.filter((workout) => {
    return workoutsForUser.some(
      (userWorkout) => userWorkout.workout_id === workout.id
    );
  });

  // what do i need? I need the days where the user has worked out on
  // I already have the workouts related to the user stored in workoutsForUser. It contains array of object [{id: 1, user_id: 1, workout_id: 1}]
  // Now I need to find the days => compare the workout_id in worksoutForUser against workout_id in day_workout, if true, it returns copy of day_workout. [{id: 1, day_id: 1, workout_id: 1}]
  // => then with the returned day_workout, we find the days worked out on by comparing the day_id to day.id in days table. If this is true then return the day
  const workoutDays = state.day_workouts
    .filter((dayWorkout) =>
      workoutsForUser.some(
        (userWorkout) => userWorkout.workout_id === dayWorkout.workout_id
      )
    )
    .map((dayWorkout) => {
      const day = state.days.find((day) => day.id === dayWorkout.day_id);
      return day ? day : null;
    });

  console.log(
    'getting workouts where wokrout id in user_workout and day_workout matches!:',
    workoutDays
  );

  console.log('this is all workouts', workouts)
  return { workouts, workoutDays };
}

// getDaysPerExercise - to be used in history
// geteExerciseSetsPerWorkout - to be used in log/show
