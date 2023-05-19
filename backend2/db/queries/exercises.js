const db = require('../connection');

// history
const getAllDetailsPerExercise = function(userId, exercise) {
  return db
    .query(
      `
  SELECT weight, reps, quantity, days.date_actual AS date, workouts.title AS title
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  JOIN days ON days.id = workouts.day_id
  WHERE users.id = $1 AND sets.exercise = $2
  ORDER BY days.date_actual DESC
  `,
      [userId, exercise]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// option 2 portion of history
const getAllExercisesPerDay = function(userId) {
  return db.query(`
  SELECT sets.exercise, sets.weight, sets.reps, sets.quantity, days.date_actual AS date, workouts.title AS title
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  JOIN days ON days.id = workouts.day_id
  WHERE users.id = $1
  ORDER BY days.date_actual DESC;
  `,[userId])
  .then((result) => {
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message);
  })
};

module.exports = { getAllDetailsPerExercise, getAllExercisesPerDay };
