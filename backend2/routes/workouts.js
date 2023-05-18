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
// (userId, picture_url, description, title)  
  addWorkoutForUser(1, 'https://randomuser.me/api/portraits/women/1.jpg', 'Today was a good one. So fun.', 'Day 6')
  .then((data) => {
    // return res.send
    // console.log(data);
  })
})

module.exports = router;
