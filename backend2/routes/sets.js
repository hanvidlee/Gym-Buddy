const express = require('express');
const router = express.Router();
const { getAllSetsPerUser } = require('../db/queries/sets')

router.get('/', (req, res) => {
  getAllSetsPerUser(1, 1).then((data) => {
    console.log('data', data);
    return res.send(data);
  });
});

module.exports = router;
