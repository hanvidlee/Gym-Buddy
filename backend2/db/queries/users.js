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

module.exports = { getUsernameFromUser };