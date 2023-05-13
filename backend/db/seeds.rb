# create users
User.create(name: 'Hanvid', username: 'hanvid_lee', email: 'hanvid@lee.com', password: 'password')
# User.create(name: 'Dina', username: 'dinasaur', email: 'dina@saur.com', password: 'password')
# User.create(name: 'Nelson', username: 'nelsonn', email: 'nelson@chang.com', password: 'password')

# create workouts
Workout.create(picture: 'https://randomuser.me/api/portraits/women/1.jpg', description: 'today was hard, i did like soo much work #sweat')
Workout.create(picture: 'https://randomuser.me/api/portraits/men/2.jpg', description: 'Wow, I feel so energized and refreshed after that workout! Its amazing how much better I feel when I take care of my body.')
Workout.create(picture: 'https://randomuser.me/api/portraits/women/3.jpg', description: 'My muscles are definitely feeling the burn, but it was totally worth it. I know Im making progress towards my fitness goals.')
Workout.create(picture: 'https://randomuser.me/api/portraits/men/4.jpg', description: 'I was really dreading going to the gym today, but I pushed through and I feel proud of myself for sticking to my routine.')

# create days
Day.create(month: 'May', day: 1, year: 2023, empty: false)
Day.create(month: 'May', day: 2, year: 2023, empty: false)
Day.create(month: 'May', day: 3, year: 2023, empty: false)
Day.create(month: 'May', day: 4, year: 2023, empty: true)
Day.create(month: 'May', day: 5, year: 2023, empty: false)

DayWorkout.create(day_id: 1, workout_id: 1)
DayWorkout.create(day_id: 2, workout_id: 2)
DayWorkout.create(day_id: 3, workout_id: 3)
DayWorkout.create(day_id: 5, workout_id: 4)

UserWorkout.create(workout_id: 1, user_id: 1)
UserWorkout.create(workout_id: 2, user_id: 1)
UserWorkout.create(workout_id: 3, user_id: 1)
UserWorkout.create(workout_id: 4, user_id: 1)

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

# create exercise_sets
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

# create exercises
Exercise.create(name: 'Push Ups')           #1
Exercise.create(name: 'Bench Press')        #2
Exercise.create(name: 'Bentover Rows')      #3
Exercise.create(name: 'Sit Ups')            #4
Exercise.create(name: 'Shoulder Press')     #5
Exercise.create(name: 'Squats')             #6
Exercise.create(name: 'Pull Ups')           #7
Exercise.create(name: 'Deadlifts')          #8
Exercise.create(name: 'Hip Thrusts')        #9
Exercise.create(name: 'Cable Flys')         #10

# create reps
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
