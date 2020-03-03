const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');
const Artists = require('../models/Artists');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

  router.get('/', async (req, res) => {
    const artists = await Artists.find();
    res.send(artists);
  });

  router.post('/', upload.single('image'), async (req, res) => {
    const artists = new Artists(req.body);
    if (req.file) {
      artists.image = req.file.filename;
    }
    try {
      await artists.save();
      res.send({id: artists._id});
    }catch (e) {
      res.status(422).send(e)
    }
  });

module.exports = router;