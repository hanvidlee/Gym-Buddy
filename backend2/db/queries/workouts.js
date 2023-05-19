const db = require('../connection');

// dashboard, calendar
const getAllWorkoutsForUser = function (userId) {
  return db
    .query(
      `
  SELECT title, description, picture_url, users.id AS user, days.date_actual AS date
  FROM workouts
  JOIN users ON users.id = workouts.user_id
  JOIN days ON days.id = workouts.day_id
  WHERE users.id = $1
  ORDER BY date DESC
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

// picture_url, description, title, sets ==> reps, quantity, weight, exercise
const addWorkoutForUser = function (userId, dayId, picture_url, description, title) {
  const queryString = `
      INSERT INTO workouts (user_id, day_id, picture_url, description, title)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `;

  const values = [userId, dayId, picture_url, description, title];

  return db.query(queryString, values)
  .then((result) => {
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message);
  })
};

const updateWorkout = function (workoutId, picture_url, description, title) {
  const queryString = `
  UPDATE workouts
  SET picture_url = $2,
      description = $3,
      title = $4
  WHERE id = $1
  `;

  const values = [workoutId, picture_url, description, title]

  return db.query(queryString, values)
  .then((result) => {
    console.log('QUERY UPDATE: ', result.rows)
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const removeWorkout = function (workoutId) {
  return db.query(`
  DELETE FROM workouts
  WHERE id = $1
  RETURNING *
  `, [workoutId])
  .then((result) => {
    console.log('QUERY DELETE: ', result.rows)
  })
}

module.exports = { getAllWorkoutsForUser, addWorkoutForUser, updateWorkout, removeWorkout };
