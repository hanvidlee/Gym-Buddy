// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080;
const app = express();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

// Separated Routes for each Resource
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');
const exerciseRoutes = require('./routes/exercises');
const setRoutes = require('./routes/sets');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const historyRoutes = require('./routes/history');
const analyticRoutes = require('./routes/analytics');
const topFiveRoutes = require('./routes/topFiveExercises');
const workoutsPerMonth = require('./routes/workoutsPerMonth');

// Mount all resource routes
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/sets', setRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/analytics', analyticRoutes);
app.use('/api/topFiveExercises', topFiveRoutes);
app.use('/api/workoutsPerMonth', workoutsPerMonth);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
