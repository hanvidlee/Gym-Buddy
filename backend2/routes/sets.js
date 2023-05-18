const express = require('express');
const router = express.Router();
const { getAllSetsPerUser } = require('../db/queries/sets')

router.get('/', (req, res) => {
  // get these to work!!
  const user_id = req.session.userId;
  const workout_id = req.body.workoutId;

  getAllSetsPerUser(user_id, workout_id).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = { getAllSetsPerUser };
