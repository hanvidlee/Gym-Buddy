const express = require('express');
const router = express.Router();
const { getAllDetailsPerExercise } = require('../db/queries/exercises')

router.get('/', (req, res) => {
  getAllDetailsPerExercise(1, 'Push Ups').then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;
