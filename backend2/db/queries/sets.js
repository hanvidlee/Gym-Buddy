const db = require('../connection');

// log/show 
// all sets per user's workout for the day
const getAllSetsPerUser = function (userId, workoutId) {
  return db
    .query(
      `
  SELECT exercise, weight, reps, quantity
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  JOIN days ON days.id = workouts.day_id
  WHERE users.id = $1 AND workouts.id = $2
  ORDER BY days.date_actual
  `,
      [userId, workoutId]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

module.exports = { getAllSetsPerUser };
