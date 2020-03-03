const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true  
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artists',
    required: true
  },
  year: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

const Albums = mongoose.model("Albums", AlbumSchema);

module.exports = Albums;
