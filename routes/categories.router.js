const express = require("express");
const router = express.Router();

const controller = require("../controllers/categories.controller");

router.get("/", controller.getAllCategories);
router.get("/:id", controller.getCategoryById);
router.delete("/:id", controller.deleteCategoryById);
router.put("/:id", controller.updateCategoryById);
router.post("/", controller.createCategory);

module.exports = router;
