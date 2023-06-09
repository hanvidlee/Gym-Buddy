const db = require('../connection');

// dashboard, calendar
const getAllWorkoutsForUser = function (userId) {
  return db
    .query(
      `
  SELECT workouts.*
  FROM workouts
  JOIN users ON users.id = workouts.user_id
  WHERE users.id = $1
  ORDER BY workouts.workout_date DESC
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
const addWorkoutForUser = function (
  userId,
  workout_date,
  picture_url,
  description,
  title
) {
  const queryString = `
      INSERT INTO workouts (user_id, workout_date, picture_url, description, title)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `;

  const values = [userId, workout_date, picture_url, description, title];

  return db
    .query(queryString, values)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

const updateWorkout = function (workoutId, picture_url, description, title) {
  const queryString = `
  UPDATE workouts
  SET picture_url = $2,
      description = $3,
      title = $4
  WHERE id = $1
  `;

  const values = [workoutId, picture_url, description, title];

  return db
    .query(queryString, values)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

const removeWorkout = function (workoutId) {
  return db
    .query(
      `
  DELETE FROM workouts
  WHERE id = $1
  RETURNING *
  `,
      [workoutId]
    )
    .then((result) => {
      return result.rows
    });
};

const getNumberOfWorkouts = function () {
  return db
    .query(
      `
  SELECT COUNT(*) AS total_workouts
  FROM workouts
  `
    )
    .then((result) => {
      return result.rows;
    });
};

const getNumberOfWorkoutsPerMonth = function () {
  return db.query(`
  SELECT TO_CHAR(workout_date, 'Month') AS workout_month,
  COUNT(id) AS workout_count
  FROM workouts
  GROUP BY TO_CHAR(workout_date, 'Month')
  ORDER BY workout_month ASC
  `)
  .then((result) => {
    return result.rows
  })
};

module.exports = {
  getAllWorkoutsForUser,
  addWorkoutForUser,
  updateWorkout,
  removeWorkout,
  getNumberOfWorkouts,
  getNumberOfWorkoutsPerMonth
};
