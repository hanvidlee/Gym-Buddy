const db = require('../connection');

const getUsernameFromUser = function(userId) {
  return db
  .query(`
  SELECT username
  FROM users
  WHERE users.id = $1
  `, [userId])
  .then((result) => {
    return result.rows
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const getUserWithEmail = function(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email.toLowerCase()])
  .then((result) => {
    return result.rows[0];
  })
  .catch((error) => {
    console.error(error.message)
  })
}

const storeUserInformation = function (username, email, password) {
  return db
    .query(`
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3) RETURNING *`
    ,[username, email, password])
};

module.exports = { getUsernameFromUser, getUserWithEmail, storeUserInformation };