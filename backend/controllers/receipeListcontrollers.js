const { Schema } = require("mongoose");
const receipeListModel = require("../models/receipeList");

const getReceipeListData =(req,res)=>{
    receipeListModel.find().then((result)=>{
             res.send(result);
    })
   
};
const createReceipeListData =(req,res)=>{
    const receipeListData =new receipeListModel(req.body);
    receipeListData.save().then((result)=>{
             res.send(result);
    })
   
};

module.exports={ getReceipeListData,createReceipeListData} ;