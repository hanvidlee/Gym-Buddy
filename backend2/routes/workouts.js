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

// checked this is working properly as intended
// only question is how to see the updated items in the postman or on /api/workouts
router.post('/', (req, res) => {
  // const user_id = req.session.userId;
  // const {day_id, picture_url, description, title } = req.body

  // (userId, dayId, picture_url, description, title)  
  addWorkoutForUser(1, 6, "https://randomuser.me/api/portraits/women/1.jpg", 'Today was a good one. So fun.', 'Day 6')
  .then((data) => {
    return res.send('Added workout successfully');
  })
})

module.exports = router;
