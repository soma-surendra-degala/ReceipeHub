const express = require("express");

const {getReceipeListData,createReceipeListData} = require("../controllers/receipeListcontrollers.js");

const router = express.Router();

router.get("/", getReceipeListData);
router.post("/", createReceipeListData);

module.exports = router;