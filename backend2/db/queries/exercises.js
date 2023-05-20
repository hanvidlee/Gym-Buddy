const db = require('../connection');

// history
const getAllDetailsPerExercise = function(userId, exercise) {
  return db
    .query(
      `
  SELECT weight, reps, quantity, workouts.workout_date AS date, workouts.title AS title
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  WHERE users.id = $1 AND sets.exercise = $2
  ORDER BY workouts.workout_date DESC
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
  SELECT sets.exercise, sets.weight, sets.reps, sets.quantity, workouts.workout_date AS date, workouts.title AS title
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  WHERE users.id = $1
  ORDER BY workouts.workout_date DESC;
  `,[userId])
  .then((result) => {
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message);
  })
};

module.exports = { getAllDetailsPerExercise, getAllExercisesPerDay };
