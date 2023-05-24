const express = require('express');
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

router.post('/', upload.single('avatar'), (req, res) => {
    let fileType = req.file.mimetype.split("/")[1]
    let newFileName = req.file.filename + "." + fileType
    console.log("newFileName: ", newFileName)

    fs.rename(`../images/${req.file.filename}`, `../images/${newFileName}`, function() {
        console.log('callback')
        res.send("200");
    })
});

module.exports = router;
