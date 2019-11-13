const express = require("express");
const router = express.Router();
const amiiboController = require("../controllers/amiibo_controller");

router.get("/amiibo", amiiboController.index);
router.get("/amiibo/year/:year", amiiboController.showYear);
router.get("/amiibo/name/:name", amiiboController.showName);
router.post("/amiibo", amiiboController.create);
router.put("/amiibo/name/:name", amiiboController.edit);
router.delete("/amiibo/name/:name", amiiboController.delete);

module.exports = router;
