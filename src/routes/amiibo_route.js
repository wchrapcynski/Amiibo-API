const express = require("express");
const router = express.Router();
const amiiboController = require("../controllers/amiibo_controller");

router.get("/", function(req, res) { res.redirect(307, "/amiibo"); });
router.get("/amiibo", amiiboController.index);
router.get("/amiibo/id/:id", amiiboController.showId);
router.get("/amiibo/releaseNA/:release", amiiboController.showReleaseNA);
router.get("/amiibo/releaseJP/:release", amiiboController.showReleaseJP);
router.get("/amiibo/name/:name", amiiboController.showName);
router.get("/amiibo/character/:character", amiiboController.showCharacter);
router.get("/amiibo/type/:type", amiiboController.showType);
// router.post("/amiibo", amiiboController.create);
// router.put("/amiibo/name/:name", amiiboController.edit);
router.delete("/amiibo/id/:id", amiiboController.delete);
    
module.exports = router;
