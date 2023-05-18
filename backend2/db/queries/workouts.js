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
  ORDER BY date
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
const addWorkoutForUser = function (userId, picture_url, description, title) {
  const queryString = `
      INSERT INTO workouts (picture_url, description, title)
      JOIN users ON users.id = workouts.user_id
      WHERE users.id = $1
      VALUES ($2, $3, $4)
      RETURNING *;
      `;

  const values = [userId, picture_url, description, title];

  return db.query(queryString, values)
  .then((result) => {
    console.log('QUERY CONSOLELOG', result.rows);
    return result.rows;
  })
  .catch((error) => {
    console.error(error.message);
  })
};

// addSetsToWorkouts
// workoutId

module.exports = { getAllWorkoutsForUser, addWorkoutForUser };
