# Create users
User.create(name: 'Hanvid', username: 'hanvid_lee', email: 'hanvid@lee.com', password: 'password', password_confirmation: 'password')
User.create(name: 'Dina', username: 'dinasaur', email: 'dina@saur.com', password: 'password', password_confirmation: 'password')
User.create(name: 'Nelson', username: 'nelsonn', email: 'nelson@cheng.com', password: 'password', password_confirmation: 'password')

# Create workouts
Workout.create(picture: 'https://randomuser.me/api/portraits/women/1.jpg', description: 'Today was hard, I did like so much work. #sweat')
Workout.create(picture: 'https://randomuser.me/api/portraits/men/2.jpg', description: 'Wow, I feel so energized and refreshed after that workout! It\'s amazing how much better I feel when I take care of my body.')
Workout.create(picture: 'https://randomuser.me/api/portraits/women/3.jpg', description: 'My muscles are definitely feeling the burn, but it was totally worth it. I know I\'m making progress towards my fitness goals.')
Workout.create(picture: 'https://randomuser.me/api/portraits/men/4.jpg', description: 'I was really dreading going to the gym today, but I pushed through, and I feel proud of myself for sticking to my routine.')

# Create days
Day.create(month: 'May', day: 1, year: 2023, empty: false)
Day.create(month: 'May', day: 2, year: 2023, empty: false)
Day.create(month: 'May', day: 3, year: 2023, empty: false)
Day.create(month: 'May', day: 4, year: 2023, empty: true)
Day.create(month: 'May', day: 5, year: 2023, empty: false)

# Create associations between day and workouts
DayWorkout.create(day_id: 1, workout_id: 1)
DayWorkout.create(day_id: 2, workout_id: 2)
DayWorkout.create(day_id: 3, workout_id: 3)
DayWorkout.create(day_id: 5, workout_id: 4)

# Create associations between users and workouts
UserWorkout.create(workout_id: 1, user_id: 1)
UserWorkout.create(workout_id: 2, user_id: 1)
UserWorkout.create(workout_id: 3, user_id: 1)
UserWorkout.create(workout_id: 4, user_id: 1)

# Create Exercises
ExerciseSet.create(id: 1, exercise: 'Push Ups', weight: 0, quantity: 2, reps: 10)
ExerciseSet.create(id: 2, exercise: 'Push Ups', weight: 0, quantity: 3, reps: 20)
ExerciseSet.create(id: 3, exercise: 'Bench Press', weight: 200, quantity: 5, reps: 5)
ExerciseSet.create(id: 4, exercise: 'Bentover Rows', weight: 250, quantity: 3, reps: 5)
ExerciseSet.create(id: 5, exercise: 'Bentover Rows', weight: 200, quantity: 2, reps: 8)
ExerciseSet.create(id: 6, exercise: 'Sit Ups', weight: 0, quantity: 5, reps: 30)
ExerciseSet.create(id: 7, exercise: 'Shoulder Press', weight: 100, quantity: 5, reps: 8)
ExerciseSet.create(id: 8, exercise: 'Deadlifts', weight: 285, quantity: 3, reps: 5)
ExerciseSet.create(id: 9, exercise: 'Hip Thrusts', weight: 1000, quantity: 2, reps: 15)
ExerciseSet.create(id: 10, exercise: 'Cable Flys', weight: 10, quantity: 6, reps: 12)

# Create set workout association
SetWorkout.create(exercise_set_id: 1, workout_id: 1)
SetWorkout.create(exercise_set_id: 2, workout_id: 1)
SetWorkout.create(exercise_set_id: 3, workout_id: 2)
SetWorkout.create(exercise_set_id: 4, workout_id: 2)
SetWorkout.create(exercise_set_id: 5, workout_id: 2)
SetWorkout.create(exercise_set_id: 6, workout_id: 3)
SetWorkout.create(exercise_set_id: 7, workout_id: 3)
SetWorkout.create(exercise_set_id: 8, workout_id: 4)
SetWorkout.create(exercise_set_id: 9, workout_id: 4)
SetWorkout.create(exercise_set_id: 10, workout_id: 4)