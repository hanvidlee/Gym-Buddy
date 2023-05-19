const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getUserWithEmail } = require('../db/queries/users')

router.post('/', (req, res) => {
  // const { email, password } = req.body;
  
  // test with incorrect email[DONE] and password
  getUserWithEmail('hanvid@lee.com', 'password')
  .then((result) => {
  
    if (result === undefined) {
      console.log("Error: User doesn't exist")
      res.status(400).send("Error: User doesn't exist")
    }

    const samePassword = bcrypt.compareSync('password', result.password);

    if (!samePassword) {
      console.log("Error: Password doesn't match");
      res.status(400).send("Error: Password does not match");
    }

    req.session.userId = result.id;
  })
  .catch((error) => {
    console.error(error.message);
  })
})

module.exports = router;