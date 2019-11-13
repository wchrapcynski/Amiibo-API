const Amiibo = require("../models/amiibo");

module.exports = {
  index: (req, res) => {
    Bachelor.find({}).then(bachelor => {
      res.json(bachelor);
    });
  },
  showYear: (req, res) => {
    Bachelor.find({ year: req.params.year }).then(bachelor => {
      res.json(bachelor);
    });
  },
  showName: (req, res) => {
    Bachelor.find({ name: req.params.name }).then(bachelor => {
      res.json(bachelor);
    });
  },
  create: (req, res) => {
    Bachelor.create(req.body).then(bachelor => {
      res.json(bachelor);
    });
  },
  edit: (req, res) => {
    Bachelor.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(bachelor => {
      res.json(bachelor);
    });
  },
  delete: (req, res) => {
    Bachelor.findOneAndDelete({ name: req.params.name }).then(bachelor => {
      res.json(bachelor);
    });
  }
};
