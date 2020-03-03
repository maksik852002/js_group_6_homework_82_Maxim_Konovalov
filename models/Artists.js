const mongoose = require("mongoose");

const ArtistsSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true  
  },
  image: {
    type: String,
    required: true
  },
  info: String
}, {
  versionKey: false
});

const Artists = mongoose.model("Artists", ArtistsSchema);

module.exports = Artists;