const express = require('express');
const router = express.Router();
const {
  getAllWorkoutsForUser,
  addWorkoutForUser,
  updateWorkout,
  removeWorkout
} = require('../db/queries/workouts');

// GET
router.get('/', (req, res) => {
  // const user_id = req.session.userId;

  getAllWorkoutsForUser(1).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

// ADD
router.post('/', (req, res) => {
  // const user_id = req.session.userId;
  // const {day_id, picture_url, description, title } = req.body

  // (userId, dayId, picture_url, description, title)
  addWorkoutForUser(
    1,
    7,
    'https://randomuser.me/api/portraits/women/1.jpg',
    'Today was fine',
    'Day 7'
  ).then((data) => {
    return res.send('Added workout successfully');
  });
});

// UPDATE
router.post('/edit', (req, res) => {
  // const {workout_id, picture_url, description, title } = req.body

  // (workout_id, picture_url, description, title)
  updateWorkout(
    2,
    'https://randomuser.me/api/portraits/women/1.jpg',
    'Not so good workout today, I hurt my back.',
    'Bad back'
  ).then((data) => {
    res.status(200).send({ message: 'OK. Update successful.' });
  });
});

// DELETE
router.post('/remove', (req, res) => {
  // const workout_id = req.body.workoutId;

  removeWorkout(1).then((data) => {
    res.status(200).send({ message: 'OK. Delete successful.' });
  });
});

module.exports = router;
