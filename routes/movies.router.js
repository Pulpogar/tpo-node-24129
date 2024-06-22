const express = require("express");
const router = express.Router();

const controller = require("../controllers/movies.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
// router.post("/", controller.store);
// router.put("/:id", controller.update);
// router.delete("/:id", controller.destroy);

module.exports = router;
