const db = require('../connection');

// history
const getAllDetailsPerExercise = function (userId, exercise) {
  return db
    .query(
      `
  SELECT weight, reps, quantity, days.date_actual AS date, workouts.title AS title
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  JOIN days ON days.id = workouts.day_id
  WHERE users.id = $1 AND sets.exercise = $2
  ORDER BY days.date_actual
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

module.exports = { getAllDetailsPerExercise };
