const express = require('express');
const router = express.Router();

const { getTopFiveExercises } = require('../db/queries/exercises')

router.get('/', (req, res) => {
  getTopFiveExercises().then((data) => {
    console.log(data)
    return res.send(data);
  })
})

module.exports = router;
