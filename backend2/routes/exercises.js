// THIS IS NOT NEEDED

const express = require('express');
const router = express.Router();
const { getAllDetailsPerExercise } = require('../db/queries/exercises');

router.get('/', (req, res) => {
  const user_id = req.session.userId;
  const exercise = req.body.exercise;

  getAllDetailsPerExercise(1, "Push Ups").then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;