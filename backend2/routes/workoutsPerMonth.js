const express = require('express');
const router = express.Router();

const { getNumberOfWorkoutsPerMonth } = require('../db/queries/workouts')

router.get('/', (req, res) => {
  getNumberOfWorkoutsPerMonth().then((data) => {
    return res.send(data);
  })
})

module.exports = router;
