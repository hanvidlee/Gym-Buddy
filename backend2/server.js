// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

// from upload.js
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

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
const exerciseProgress = require('./routes/exerciseProgress');
const imageUpload = require('./routes/imageUpload');
// const upload = require('./routes/upload');

// upload.js 
app.use(express.static('./images'));



app.post('/api/uploadFile', upload.single('avatar'), (req, res) => {
  console.log("REQ BUFFER: ", req.buffer);

  const filePath = req.file.path;

  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.error('Error reading file: ', error);
      return;
    }

    // buffer can be used for sending it over a network/storing it in database/further manipulation
    const buffer = Buffer.from(data);

    let binary = '';

    const bytes = new Uint8Array(buffer);

    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    const src = "data:image/jpeg;base64," + btoa(binary);

    let fileType = req.file.mimetype.split("/")[1];
    let newFileName = req.file.filename + "." + fileType;

    fs.rename(`./images/${req.file.filename}`, `./images/${newFileName}`, function() {
      res.send(src);
    });
  });
});


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
app.use('/api/exerciseProgress', exerciseProgress);
app.use('/api/images', imageUpload);
// app.use('/api/uploadFile');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
