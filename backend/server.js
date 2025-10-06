const express =require("express");
const mongoose =require("mongoose");
const cors = require("cors");
const sliderRouter=require("./routes/sliderRoutes");
const categoryRouter=require("./routes/categoryRoutes");
const receipeList=require("./routes/receipeList")



const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect("mongodb+srv://surendra:Suri1234@surendra.irg39h8.mongodb.net/receipe_hub?retryWrites=true&w=majority&appName=Surendra").then(()=>{
    console.log("Database Is Connected");
});

app.listen(3500,()=>{
    console.log("Server is Running");
})

app.use("/slider",sliderRouter);
app.use("/category",categoryRouter);
app.use("/receipeList",receipeList);