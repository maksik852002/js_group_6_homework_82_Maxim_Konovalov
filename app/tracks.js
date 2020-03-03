const express = require('express');

const Tracks = require('../models/Tracks');
const router = express.Router();

  router.get('/', async (req, res) => {
    let tracks;
    if (req.query.album) {
      tracks = await Tracks.find({"album": req.query.album})
    } else {
      tracks = await Tracks.find();
    }
    res.send(tracks);
  });

  router.get('/:id', async (req, res) => {
    try {
      const track = await Tracks.findById(req.params.id).populate('album');
      res.send(track);
    } catch (e) {
      res.status(404).send({message: "Not Found"});
    }
  });

  router.post('/', async (req, res) => {
   
    const track = new Tracks(req.body);
    try {
      await track.save();
      res.send({id: track._id});
    }catch (e) {
      res.status(422).send(e)
    }
  });

module.exports = router;