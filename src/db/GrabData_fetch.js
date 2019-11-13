
const axios = require('axios');
const fs = require("fs");
const fetch = require("node-fetch");

grabData()

function grabData() {
    fetch("https://www.amiiboapi.com/api/amiibo")
      .then(res => res.json())
      .then(res => {
          fs.writeFile("./amiibo_fetch.json", JSON.stringify(res, null, 2), function(err) {
            if (err) {
              return console.log(err);
            }
            console.log("The file was saved!");
            console.log(res);
          }); 
    })
      .catch(error => {
        console.log(error);
      });
  };
