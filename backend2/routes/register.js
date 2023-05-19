const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { storeUserInformation, getUserWithEmail } = require('../db/queries/users')

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  getUserWithEmail(email)
    .then((result) => {
      if (result) {
        res.status(400).send("Error 400: Sorry, that user already exists!");
        return;
      }

      storeUserInformation('pika123', 'pikachu@mail.com', bcrypt.hashSync('123', 10))
      .then((result) => {
        console.log(result.rows)
      })
      .catch((error) => {
        console.error(error.message);
      })
    })
    .catch((error) => {
      console.error(error.message);
    })
})

module.exports = router;