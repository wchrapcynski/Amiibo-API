const Amiibo = require("../models/amiibo");
const dataAmiibo = require("./amiibo_fetch.json");;

const amiiboData = dataAmiibo.map(item => {
  const amiibo = {};
  amiibo.amiiboSeries = item.amiiboSeries;
  amiibo.character = item.character;
  amiibo.gameSeries = item.gameSeries;
  amiibo.image = item.image;
  amiibo.name = item.name;
  amiibo.release = item.release;
  amiibo.type = item.type;
  return amiibo;
});

Amiibo.remove({}).then(() => {
  Amiibo.create(amiiboData)
    .then(amiibo => {
      console.log(amiibo);
    })
    .catch(err => {
      console.log(err);
    });
});