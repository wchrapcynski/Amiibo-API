const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const amiiboSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minLength: 1
  },
  character: {
    type: String,
    trim: true,
    minLength: 1
  },
  gameSeries: {
    type: String,
    trim: true,
    minLength: 1
  },
  image: {
    type: String,
    trim: true,
    minLength: 1
  },
  type: {
    type: String,
    trim: true,
    minLength: 1
  },
  amiiboSeries: {
    type: String,
    trim: true,
    minLength: 1
  },
  releaseNA: {
    type: Date
  },
  releaseJP: {
    type: Date
  }
});

const Amiibo = mongoose.model("amiibo", amiiboSchema);
module.exports = Amiibo;
