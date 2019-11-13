const express = require("express");
const router = express.Router();
const amiiboController = require("../controllers/amiibo_controller");

// Redirects the root to the amiibo resource
router.get("/", function(req, res) { res.redirect(307, "/amiibo"); });
// Main resource that lists the entire database
router.get("/amiibo", amiiboController.index);
// Searching by ID
router.get("/amiibo/id/:id", amiiboController.showId);
// Search by North American Release dates
router.get("/amiibo/releaseNA/:release", amiiboController.showReleaseNA);
// Searcy by American Release dates. The date format is YYYY-MM-DD.
router.get("/amiibo/releaseJP/:release", amiiboController.showReleaseJP);
// Search by name
router.get("/amiibo/name/:name", amiiboController.showName);
// Search by character name
router.get("/amiibo/character/:character", amiiboController.showCharacter);
// Search by type (Card/Figure)
router.get("/amiibo/type/:type", amiiboController.showType);
// Creates Amiibo listing
router.post("/amiibo", amiiboController.create);
// Edits an Amiibo listing
router.put("/amiibo/id/:id", amiiboController.edit);
// Deletes an Amiibo listing
router.delete("/amiibo/id/:id", amiiboController.delete);
    
module.exports = router;
