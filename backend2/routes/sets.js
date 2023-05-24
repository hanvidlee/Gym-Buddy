const express = require('express');
const router = express.Router();
const {
  getAllSetsPerUser,
  addSetsPerWorkout,
  removeSetFromWorkout,
  updateSetInWorkout,
} = require('../db/queries/sets');

// GET
router.get('/', (req, res) => {
  // const user_id = req.session.userId;
  // const workout_id = req.body.workoutId;

  getAllSetsPerUser(1).then((data) => {
    // console.log('data', data);
    return res.send(data);
  });
});

// ADD
router.post('/', (req, res) => {
  const user_id = req.session.userId;
  const {workout_id, weight, reps, quantity, exercise } = req.body

  // workoutId, weight, reps, quantity, exercise
  addSetsPerWorkout(workout_id, weight, reps, quantity, exercise).then((data) => {
    return res.send('Added sets successfully');
  });
});

// ASK AHANA ABOUT THIS. Can I have this post route to '/' ?? Or do I use PUT here instead.
// UPDATE
router.post('/edit', (req, res) => {
  const { set_id, weight, reps, quantity, exercise } = req.body
  // console.log("req.body", req.body)

  updateSetInWorkout(set_id, weight, reps, quantity, exercise).then((data) => {
    return res.status(200).send({ message: 'OK. Update successful.' });
  });
});

// DELETE
router.post('/remove', (req, res) => {
  const { set_id } = req.body

  removeSetFromWorkout(set_id).then((data) => {
    res.status(200).send({ message: 'OK. Delete successful.' });
  });
});

module.exports = router;
