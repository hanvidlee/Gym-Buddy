const express = require('express');
const router = express.Router();
const { getAllDetailsPerExercise, getAllExercisesPerDay } = require('../db/queries/exercises');

router.get('/details', (req, res) => {
  // const user_id = req.session.userId;
  // const exercise = req.body.exercise;

  const user_id = 1;
  const exercise = 'Push Ups';

  console.log('Hi')

  getAllDetailsPerExercise(user_id, exercise)
  .then((data) => {
    console.log(data);
    return res.send(data)
  })
  .catch((error) => {
    console.error(error.message)
  })
});

router.get('/', (req, res) => {
  // const user_id = req.session.userId;
  const user_id = 1;

  console.log('Hello');

  getAllExercisesPerDay(user_id)
  .then((data) => {
    console.log(data);
    return res.send(data)
  })
  .catch((error) => {
    console.error(error.message)
  })
});

module.exports = router;
