const receipeListModel = require("../models/receipeList");

// Get all recipes
const getReceipeListData = (req, res) => {
  receipeListModel.find()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({ error: err.message }));
};

// Create new recipe
const createReceipeListData = (req, res) => {
  const receipeListData = new receipeListModel(req.body);
  receipeListData.save()
    .then(result => res.send(result))
    .catch(err => res.status(500).send({ error: err.message }));
};

// Get single recipe by ID
const getReceipeById = (req, res) => {
  const { id } = req.params;
  receipeListModel.findById(id)
    .then(result => {
      if (!result) return res.status(404).send({ message: "Recipe not found" });
      res.send(result);
    })
    .catch(err => res.status(500).send({ error: err.message }));
};

module.exports = { getReceipeListData, createReceipeListData, getReceipeById };
