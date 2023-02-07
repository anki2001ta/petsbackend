const express=require("express");
const { foodModel } = require("../Models/Food.model");
const { petModel } = require("../Models/Pet.model");
const { careModel } = require("../Models/Care.model");

const petRoute=express.Router()
petRoute.use(express.json())

petRoute.post("/",async(req,res)=>{
    
    try{
        await petModel.insertMany(req.body.data)
        // console.log(req.body)
        res.send(req.body.data)
    }
    catch(er){
        console.log(er)
    }
});
petRoute.get("/:category",async(req,res)=>{
    let petname=req.params.category;
    let name=await petModel.find({"category":petname});
    let foods=await foodModel.find({"Used for":petname});
    let care=await careModel.find({"Used for":petname});
    res.send({"pets":name,"foods":foods,"cares":care})

})
petRoute.get("/all/food",async(req,res)=>{
    let foods=await foodModel.find();
    res.send({"foods":foods})

})

petRoute.get("/all/care",async(req,res)=>{
    let care=await careModel.find();
    res.send({"cares":care})

})



module.exports=petRoute