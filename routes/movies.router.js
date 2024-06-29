const express = require("express");
const router = express.Router();

const controller = require("../controllers/movies.controller");

router.get("/", controller.getAllMovies);
router.get("/:id", controller.getMovieById);
router.delete("/:id", controller.deleteMovieById);
router.post("/", controller.createMovie);
// router.put("/:id", controller.update);

module.exports = router;
