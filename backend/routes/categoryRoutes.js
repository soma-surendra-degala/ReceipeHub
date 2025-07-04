const express = require("express");

const {getCategoryData,createCategoryData} = require("../controllers/categorycontrollers.js");

const router = express.Router();

router.get("/", getCategoryData);
router.post("/", createCategoryData);


module.exports = router;