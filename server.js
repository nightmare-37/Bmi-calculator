//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});
app.post("/",function(req,res){
  console.log(req.body);
  var a=parseFloat(req.body.weight);
  var b=parseFloat(req.body.height);
  var c=a/(b*b);
  res.send("your bmi is "+c);
});
app.listen(3000,function()
{
  console.log("calculate");
});
