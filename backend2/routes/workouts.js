const express = require('express');
const router = express.Router();
const { getAllWorkoutsForUser } = require('../db/queries/workouts');

router.get('/', (req, res) => {
  getAllWorkoutsForUser(1).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;
