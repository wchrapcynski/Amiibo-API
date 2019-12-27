const mongoose = require("mongoose");
mongoose.Promise = Promise;
// const mongoURI = "mongodb://localhost/amiibo_api";
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/amiibo_api";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance => console.log("Conneted: " + instance))
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;
