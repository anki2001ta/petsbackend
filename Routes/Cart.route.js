const express=require("express");
const {cartCreate,cartGet,delcart,delcartById} = require("../Controllers/allproduct");
const cartRoute=express.Router()
cartRoute.use(express.json())
cartRoute.route("/create").post(cartCreate);
cartRoute.route("/").get(cartGet)
cartRoute.route("/delete/:id").delete(delcart)
cartRoute.route("/remove").delete(delcartById)
module.exports=cartRoute