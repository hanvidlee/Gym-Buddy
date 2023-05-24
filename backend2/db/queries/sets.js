const db = require('../connection');

// log/show 
// all sets per user's workout for the day
const getAllSetsPerUser = function (userId) {
  return db
    .query(
      `
  SELECT sets.*
  FROM sets
  JOIN workouts ON workouts.id = sets.workout_id
  JOIN users ON users.id = workouts.user_id
  WHERE users.id = $1
  ORDER BY workouts.workout_date
  `,
      [userId]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// log/new
const addSetsPerWorkout = function(workout_id, weight, reps, quantity, exercise) {
  const queryString = `
  INSERT INTO sets (workout_id, weight, reps, quantity, exercise)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `;

  const values = [workout_id, weight, reps, quantity, exercise];

  return db.query(queryString, values)
  .then ((result) => {
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const updateSetInWorkout = function(setId, weight, reps, quantity, exercise) {
  const queryString = `
  UPDATE sets
  SET weight = $2,
      reps = $3,
      quantity = $4,
      exercise = $5
  WHERE id = $1
  RETURNING *
  `;

  const values = [setId, weight, reps, quantity, exercise];

  return db.query(queryString, values)
  .then((result) => {
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const removeSetFromWorkout = function(setId) {
  return db.query(`DELETE FROM sets
  WHERE id = $1
  RETURNING *
  `, [setId])
};

module.exports = { getAllSetsPerUser, addSetsPerWorkout, removeSetFromWorkout, updateSetInWorkout };
