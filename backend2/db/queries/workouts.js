const db = require('../connection');

// dashboard, calendar 
const getAllWorkoutsForUser = function(userId) {
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

// const addWorkoutForUser = function(userId, )

module.exports = { getAllWorkoutsForUser };
