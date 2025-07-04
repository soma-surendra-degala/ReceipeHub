const mongoose=require("mongoose");
const schema=mongoose.Schema;

const categorySchema = new schema({
    name:String,
    categoryId:Number,
    imageurl:String
})

const categoryModel = mongoose.model("category",categorySchema);

module.exports = categoryModel;