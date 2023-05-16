# Create exercises
Exercise.create(name: 'Push Ups')
Exercise.create(name: 'Bench Press')
Exercise.create(name: 'Bentover Rows')
Exercise.create(name: 'Sit Ups')
Exercise.create(name: 'Shoulder Press')
Exercise.create(name: 'Squats')
Exercise.create(name: 'Pull Ups')
Exercise.create(name: 'Deadlifts')
Exercise.create(name: 'Hip Thrusts')
Exercise.create(name: 'Cable Flys')

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

# Create exercise sets
ExerciseSet.create(exercise_id: 1, weight: 0, quantity: 2)
ExerciseSet.create(exercise_id: 1, weight: 0, quantity: 3)
ExerciseSet.create(exercise_id: 2, weight: 200, quantity: 5)
ExerciseSet.create(exercise_id: 3, weight: 250, quantity: 3)
ExerciseSet.create(exercise_id: 3, weight: 200, quantity: 2)
ExerciseSet.create(exercise_id: 4, weight: 0, quantity: 5)
ExerciseSet.create(exercise_id: 5, weight: 100, quantity: 5)
ExerciseSet.create(exercise_id: 8, weight: 285, quantity: 3)
ExerciseSet.create(exercise_id: 9, weight: 1000, quantity: 2)
ExerciseSet.create(exercise_id: 10, weight: 10, quantity: 6)

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

# Create reps
Rep.create(exercise_set_id: 1, quantity: 10)
Rep.create(exercise_set_id: 2, quantity: 20)
Rep.create(exercise_set_id: 2, quantity: 5)
Rep.create(exercise_set_id: 3, quantity: 5)
Rep.create(exercise_set_id: 3, quantity: 8)
Rep.create(exercise_set_id: 4, quantity: 30)
Rep.create(exercise_set_id: 5, quantity: 8)
Rep.create(exercise_set_id: 8, quantity: 5)
Rep.create(exercise_set_id: 9, quantity: 15)
Rep.create(exercise_set_id: 10, quantity: 12)
