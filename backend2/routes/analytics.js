const express = require('express');
const router = express.Router();

const { getNumberOfWorkouts } = require('../db/queries/workouts')

router.get('/', (req, res) => {
  getNumberOfWorkouts().then((data) => {
    return res.send(data);
  })
})

module.exports = router;
