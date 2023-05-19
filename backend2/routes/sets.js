const express = require('express');
const router = express.Router();
const { getAllSetsPerUser, addSetsPerWorkout, removeSetFromWorkout } = require('../db/queries/sets')

// log/show
router.get('/', (req, res) => {
  // const user_id = req.session.userId;
  // const workout_id = req.body.workoutId;

  getAllSetsPerUser(1, 1).then((data) => {
    // console.log('data', data);
    return res.send(data);
  });
});

// log/new
router.post('/', (req, res) => {
  // const user_id = req.session.userId;
  // const {workout_id, weight, reps, quantity, exercise } = req.body

  // workoutId, weight, reps, quantity, exercise
  addSetsPerWorkout(5, 0, 20, 5, 'Sit Ups')
  .then((data) => {
    return res.send('Added sets successfully');
  })
})

router.post('/remove', (req, res) => {
  // const workout_id = req.sessions.workoutId;

  removeSetFromWorkout(5)
  .then((data) => {
    res.send(200, { message: 'OK' });
  })
})

module.exports = router;
