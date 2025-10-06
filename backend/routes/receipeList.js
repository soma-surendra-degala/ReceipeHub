const express = require("express");
const { getReceipeListData, createReceipeListData, getReceipeById } = require("../controllers/receipeListcontrollers");

const router = express.Router();

// Routes
router.get("/", getReceipeListData);          // GET all recipes
router.post("/", createReceipeListData);     // POST new recipe
router.get("/receipe/:id", getReceipeById);  // GET single recipe by ID

module.exports = router;
