import dayjs from 'dayjs';

// getWorkoutForDayPerUser - to be used in dashboard, log/new, and log/show
export default function getWorkoutForDayPerUser(state, userId, selectedDate) {
  // currentUser returns the first element that meets the condition
  const currentUser = state.users.find((user) => user.id === userId)

  if (!currentUser) {
    return null;
  }

  // workoutForUser returns shallow copy of user_workouts if the workout is for the current User
  const workoutsForUser = state.user_workouts.filter((userWorkout) => {
    return userWorkout.user_id === currentUser.id
  })

  // parsedDate 
  const parsedSelectedDate = dayjs(selectedDate);

  // matchedDays return shallow copy of days (should only return an array of 1 object)
  const matchedDays = state.days.filter((day) => {
    return (
      parsedSelectedDate.year() === day.year &&
      parsedSelectedDate.format('MMM') === day.month &&
      parsedSelectedDate.date() === day.day
    )
  })

  // workoutsForDay
  const workoutsForDay = state.day_workouts.filter((dayWorkout) => {
    return dayWorkout.day_id === matchedDays[0].id //retrieve first and only element from matchedDays
  })

  console.log(`workoutforUSER!: `, workoutsForUser)
  console.log('this is matched date!', matchedDays)
  console.log('workoutsForDAY= ', workoutsForDay)
}

// getDaysPerExercise - to be used in history
// geteExerciseSetsPerWorkout - to be used in log/show