const express = require("express");
const router = express.Router();

const controller = require("../controllers/directors.controller");

router.get("/", controller.getAllDirectors);
router.get("/:id", controller.getDirectorById);
router.delete("/:id", controller.deleteDirectorById);
router.post("/", controller.createDirector);

module.exports = router;
