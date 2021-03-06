const Amiibo = require("../models/amiibo");

// Testing update

module.exports = {
  index: (req, res) => {
    Amiibo.find({}).then(amiibo => {
      res.json(amiibo);
    });
  },
  indexSortA: (req, res) => {
    Amiibo.find({}, null, {sort: {character: 1 } }).then(amiibo => {
      res.json(amiibo);
    });
  },
  indexSortD: (req, res) => {
    Amiibo.find({}, null, { sort: { character: -1 } }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showId: (req, res) => {
    Amiibo.find({ _id: req.params.id }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showReleaseNA: (req, res) => {
    console.log(req.params.release);
    Amiibo.find({
      releaseNA: req.params.release + "T00:00:00.000Z"
    }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showReleaseRangeNA: (req, res) => {
    console.log(req.params.release);
    Amiibo.find({
      releaseNA: {
        $gte: req.params.releaseStart + "T00:00:00.000Z",
        $lte: req.params.releaseEnd + "T00:00:00.000Z"
      }
    }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showReleaseJP: (req, res) => {
    console.log(req.params.release);
    Amiibo.find({
      releaseJP: req.params.release + "T00:00:00.000Z"
    }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showReleaseRangeJP: (req, res) => {
    console.log(req.params.release);
    Amiibo.find({
      releaseJP: {
        $gte: req.params.releaseStart + "T00:00:00.000Z",
        $lte: req.params.releaseEnd + "T00:00:00.000Z"
      }
    }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showName: (req, res) => {
    Amiibo.find({ name: req.params.name }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showCharacter: (req, res) => {
    Amiibo.find({ name: req.params.character }).then(amiibo => {
      res.json(amiibo);
    });
  },
  showType: (req, res) => {
    Amiibo.find({ type: req.params.type }).then(amiibo => {
      res.json(amiibo);
    });
  },
  create: (req, res) => {
    Amiibo.create(req.body).then(amiibo => {
      res.json(amiibo);
    });
  },
  edit: (req, res) => {
    Amiibo.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(amiibo => {
      res.json(amiibo);
    });
  },
  delete: (req, res) => {
    Amiibo.findOneAndDelete({ _id: req.params.id }).then(amiibo => {
      res.json(amiibo);
    });
  }
};
