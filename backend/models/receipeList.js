const mongoose = require("mongoose");
const schema = mongoose.Schema;

const receipeListSchema = new schema({
  name: String,
  categoryId: Number,
  receipeId: Number,
  imageurl: String,
  Servings: Number,
  ReadyInMinutes: Number,
  Healthscore: Number,
  Ingredients: [String],
  Summary: String,
  RecipeNutrition: {
    calories: Number,
    Fat: Number,
    protein: Number,
    Manganese: Number
  },
  steps: [String]
});

const receipeListModel = mongoose.model("receipeList", receipeListSchema);

module.exports = receipeListModel;
