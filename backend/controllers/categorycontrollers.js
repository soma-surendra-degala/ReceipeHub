const { Schema } = require("mongoose");
const categoryModel = require("../models/category");

const getCategoryData =(req,res)=>{
    categoryModel.find().then((result)=>{
             res.send(result);
    })
   
};
const createCategoryData =(req,res)=>{
    const categoryData =new categoryModel(req.body);
    categoryData.save().then((result)=>{
             res.send(result);
    })
   
};

module.exports={ getCategoryData,createCategoryData} ;