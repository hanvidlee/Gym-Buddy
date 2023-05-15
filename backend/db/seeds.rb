# create users
u1 = User.create(name: 'Hanvid', username: 'hanvid_lee', email: 'hanvid@lee.com', password: 'password')
u2 = User.create(name: 'Dina', username: 'dinasaur', email: 'dina@saur.com', password: 'password')
u3 = User.create(name: 'Nelson', username: 'nelsonn', email: 'nelson@cheng.com', password: 'password')

# create days
d1 = Day.create(month: 'May', day: 1, year: 2023, empty: false)
d2 = Day.create(month: 'May', day: 2, year: 2023, empty: false)
d3 = Day.create(month: 'May', day: 3, year: 2023, empty: false)
d4 = Day.create(month: 'May', day: 4, year: 2023, empty: true)
d5 = Day.create(month: 'May', day: 5, year: 2023, empty: false)

# create workouts
w1 = Workout.create(picture: 'https://randomuser.me/api/portraits/women/1.jpg', description: 'today was hard, i did like soo much work #sweat')
w2 = Workout.create(picture: 'https://randomuser.me/api/portraits/men/2.jpg', description: 'Wow, I feel so energized and refreshed after that workout! Its amazing how much better I feel when I take care of my body.')
w3 = Workout.create(picture: 'https://randomuser.me/api/portraits/women/3.jpg', description: 'My muscles are definitely feeling the burn, but it was totally worth it. I know Im making progress towards my fitness goals.')
w4 = Workout.create(picture: 'https://randomuser.me/api/portraits/men/4.jpg', description: 'I was really dreading going to the gym today, but I pushed through and I feel proud of myself for sticking to my routine.')


DayWorkout.create(day_id: d1.id, workout_id: w1.id)
DayWorkout.create(day_id: d2.id, workout_id: w2.id)
DayWorkout.create(day_id: d3.id, workout_id: w3.id)
DayWorkout.create(day_id: d5.id, workout_id: w4.id)

UserWorkout.create(workout_id: w1.id, user_id: u1.id)
UserWorkout.create(workout_id: w2.id, user_id: u1.id)
UserWorkout.create(workout_id: w3.id, user_id: u1.id)
UserWorkout.create(workout_id: w4.id, user_id: u1.id)

# create exercises
e1 = Exercise.create(name: 'Push Ups')       
e2 = Exercise.create(name: 'Bench Press')    
e3 = Exercise.create(name: 'Bentover Rows')  
e4 = Exercise.create(name: 'Sit Ups')        
e5 = Exercise.create(name: 'Shoulder Press') 
e6 = Exercise.create(name: 'Squats')         
e7 = Exercise.create(name: 'Pull Ups')       
e8 = Exercise.create(name: 'Deadlifts')      
e9 = Exercise.create(name: 'Hip Thrusts')    
e10 = Exercise.create(name: 'Cable Flys')    

# create exercise_sets
es1 = ExerciseSet.create(exercise_id: e1.id, weight: 0, quantity: 2)
es2 = ExerciseSet.create(exercise_id: e1.id, weight: 0, quantity: 3)
es3 = ExerciseSet.create(exercise_id: e2.id, weight: 200, quantity: 5)
es4 = ExerciseSet.create(exercise_id: e3.id, weight: 250, quantity: 3)
es5 = ExerciseSet.create(exercise_id: e3.id, weight: 200, quantity: 2)
es6 = ExerciseSet.create(exercise_id: e4.id, weight: 0, quantity: 5)
es7 = ExerciseSet.create(exercise_id: e5.id, weight: 100, quantity: 5)
es8 = ExerciseSet.create(exercise_id: e8.id, weight: 285, quantity: 3)
es9 = ExerciseSet.create(exercise_id: e9.id, weight: 1000, quantity: 2)
es10 = ExerciseSet.create(exercise_id: e10.id, weight: 10, quantity: 6)

SetWorkout.create(exercise_set_id: es1.id, workout_id: w1.id)
SetWorkout.create(exercise_set_id: es2.id, workout_id: w1.id)
SetWorkout.create(exercise_set_id: es3.id, workout_id: w2.id)
SetWorkout.create(exercise_set_id: es4.id, workout_id: w2.id)
SetWorkout.create(exercise_set_id: es5.id, workout_id: w2.id)
SetWorkout.create(exercise_set_id: es6.id, workout_id: w3.id)
SetWorkout.create(exercise_set_id: es7.id, workout_id: w3.id)
SetWorkout.create(exercise_set_id: es8.id, workout_id: w4.id)
SetWorkout.create(exercise_set_id: es9.id, workout_id: w4.id)
SetWorkout.create(exercise_set_id: es10.id, workout_id: w4.id)

# create reps
Rep.create(exercise_set_id: es1.id, quantity: 10)
Rep.create(exercise_set_id: es2.id, quantity: 20)
Rep.create(exercise_set_id: es2.id, quantity: 5)
Rep.create(exercise_set_id: es3.id, quantity: 5)
Rep.create(exercise_set_id: es3.id, quantity: 8)
Rep.create(exercise_set_id: es4.id, quantity: 30)
Rep.create(exercise_set_id: es5.id, quantity: 8)
Rep.create(exercise_set_id: es8.id, quantity: 5)
Rep.create(exercise_set_id: es9.id, quantity: 15)
Rep.create(exercise_set_id: es10.id, quantity: 12)
