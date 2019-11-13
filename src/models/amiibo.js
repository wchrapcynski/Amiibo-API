// const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const releaseSchema = new Shema({
    au: {
        type: Date
    },
    eu: {
        type: Date
    },
    jp: {
        type: Date
    },
    na: {
        type: Date
    }
});

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
  release: {
    type: [releaseSchema]
  }
});

const Amiibo = mongoose.model("ammibo", amiiboSchema);
module.exports = Amiibo;