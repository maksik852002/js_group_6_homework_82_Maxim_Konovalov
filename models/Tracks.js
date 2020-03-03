const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true  
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Albums',
    required: true
  },
  duration: String, 
}, {
  versionKey: false
});

const Tracks = mongoose.model("Tracks", TrackSchema);

module.exports = Tracks;