const express = require("express");
const designerController = require("../controllers/designerController");

const router = express.Router();

router.get("/", designerController.getDesigners);
router.get("/:id", designerController.getDesignerById);

module.exports = router;
