const express=require("express");
const {cartCreate,cartGet} = require("../Controllers/allproduct");
const cartRoute=express.Router()
cartRoute.use(express.json())
cartRoute.route("/create").post(cartCreate);
cartRoute.route("/").get(cartGet)


module.exports=cartRoute