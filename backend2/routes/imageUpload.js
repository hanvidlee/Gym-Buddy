const express = require('express');
const router = express.Router();
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

// router.post('/', upload.single('avatar'), (req, res) => {
//   res.send("200");
// })
  
router.post('/', upload.single('myImage'),  (req, res) => {
  res.send(req.file.originalname)
})

// route needs to return a proper image url
// 1. I think!! it needs to be a frontend url (public folder)
// https://stackoverflow.com/questions/74016266/image-is-stored-in-backend-folder-but-not-found-in-frontend-using-multer-and-rea
router.get('/:fileName', (req, res) => {
  const filePath = `/backend2/images/${req.params.fileName}`
  res.sendFile(filePath)
})

module.exports = router;
