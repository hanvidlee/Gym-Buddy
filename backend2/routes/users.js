const express = require('express');
const router = express.Router();
const { getUsernameFromUser } = require('../db/queries/users');

router.get('/', (req, res) => {
  const user_id = req.session.userId;

  getUsernameFromUser(user_id).then((data) => {
    // console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;
