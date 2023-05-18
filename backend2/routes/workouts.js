const express = require('express');
const router = express.Router();
const { getAllWorkoutsForUser } = require('../db/queries/workouts');

router.get('/', (req, res) => {
  const user_id = req.session.userId;

  getAllWorkoutsForUser(user_id).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;
