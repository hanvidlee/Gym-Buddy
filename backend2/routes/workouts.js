const express = require('express');
const router = express.Router();
const { getAllWorkoutsForUser, addWorkoutForUser } = require('../db/queries/workouts');

router.get('/', (req, res) => {
  // const user_id = req.session.userId;

  getAllWorkoutsForUser(1).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

router.post('/', (req, res) => {
  // const user_id = req.session.userId;
  // const {day_id, picture_url, description, title } = req.body

  // (userId, dayId, picture_url, description, title)  
  addWorkoutForUser(1, 7, "https://randomuser.me/api/portraits/women/1.jpg", 'Today was fine', 'Day 7')
  .then((data) => {
    return res.send('Added workout successfully');
  })
})

module.exports = router;
