
const axios = require('axios');
const fs = require("fs");
const fetch = require("node-fetch");

grabData()

function grabData() {
    axios.get("https://www.amiiboapi.com/api/amiibo")
      .then(res => {
          fs.writeFile("./amiibo_axios.json", res, function(err) {
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
