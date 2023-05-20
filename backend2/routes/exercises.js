const express = require('express');
const axios = require('axios');
const router = express.Router();
const request = require('request');
const { getAllDetailsPerExercise } = require('../db/queries/exercises');

// router.get('/', async (req, res) => {

//   // getAllDetailsPerExercise(1, "Push Ups").then((data) => {
//   //   console.log('data', data);
//   //   return res.send(data);
//   // });
// });
const apiKey = "786ef654bemsh89a3687e7153b6fp13579ejsn98b50a66d1f2";

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

// url = URI("https://exercisedb.p.rapidapi.com/exercises")

// http = Net::HTTP.new(url.host, url.port)
// http.use_ssl = true

// request = Net::HTTP::Get.new(url)

// request["X-RapidAPI-Key"] = Rails.application.config.api_key

// request["X-RapidAPI-Host"] = 'exercisedb.p.rapidapi.com'

// response = http.request(request)
// render json: response.read_body
