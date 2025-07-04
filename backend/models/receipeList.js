const mongoose = require("mongoose");
const schema = mongoose.Schema;

const receipeListSchema = new schema({
    name:String,
    categoryId:Number,
    receipeId:Number,
    imageurl:String
})

const receipeListModel = mongoose.model("receipeList",receipeListSchema);

module.exports = receipeListModel;