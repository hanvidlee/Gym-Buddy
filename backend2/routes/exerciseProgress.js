const express = require('express');
const router = express.Router();

const { getExerciseProgress } = require('../db/queries/exercises')

router.get('/', (req, res) => {
  getExerciseProgress().then((data) => {
    return res.send(data);
  })
})

module.exports = router;
