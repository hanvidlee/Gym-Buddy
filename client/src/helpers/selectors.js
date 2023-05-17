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

  // matchedDate
  const matchedDate = state.days.filter((day) => {
    return (
      parsedSelectedDate.year() === day.year &&
      parsedSelectedDate.format('MMM') === day.month &&
      parsedSelectedDate.date() === day.day
    )
  })

  // workoutForDay
  console.log(`this is my currentUser: ${currentUser.id}`)
  console.log(`workoutforUSER!: `, workoutsForUser)
  console.log('this is matched date!', matchedDate)
}

// getDaysPerExercise - to be used in history
// geteExerciseSetsPerWorkout - to be used in log/show