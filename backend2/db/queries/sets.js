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

// log/new
const addSetsPerWorkout = function(workoutId, weight, reps, quantity, exercise) {
  const queryString = `
  INSERT INTO sets (workout_id, weight, reps, quantity, exercise)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `;

  const values = [workoutId, weight, reps, quantity, exercise];

  return db.query(queryString, values)
  .then ((result) => {
    console.log('QUERY: ', result.rows);
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const removeSetFromWorkout = function(workoutId) {
  return db.query(`DELETE FROM sets
  WHERE workout_id = $1
  RETURNING *
  `, [workoutId])
  .then((result) => {
    console.log('DELETE QUERY: ', result.rows)
  })
};

module.exports = { getAllSetsPerUser, addSetsPerWorkout, removeSetFromWorkout };
