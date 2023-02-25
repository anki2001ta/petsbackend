const express=require("express");
const { petsdata,pets,careCreate,foodCreate,careget,foodget,caresingledata,foodsingledata,searchpets,
    allpets,deletepets,deletegroom,deletefood,updatefood,updatepets,updategroom,petsCreate} = require("../Controllers/allproduct");

const petRoute=express.Router()
petRoute.use(express.json())
petRoute.route("/single/:id").get(petsdata)
petRoute.route("/pets").get(allpets)
petRoute.route("/petsCreate").post(petsCreate)
petRoute.route("/petsdelete/:id").delete(deletepets)
petRoute.route("/groomdelete/:id").delete(deletegroom)
petRoute.route("/fooddelete/:id").delete(deletefood)
petRoute.route("/foodupdate/:id").patch(updatefood)
petRoute.route("/petsupdate/:id").patch(updatepets)
petRoute.route("/groomupdate/:id").patch(updategroom)
petRoute.route("/:category").get(pets)
petRoute.route("/care").post(careCreate)
petRoute.route("/food").post(foodCreate)
petRoute.route("/care/groom").get(careget)
petRoute.route("/food").get(foodCreate)
petRoute.route("/food/feed").get(foodget)
petRoute.route("/caresingle/:id").get(caresingledata)
petRoute.route("/foodsingle/:id").get(foodsingledata)
petRoute.route("/pet/search").get(searchpets)

module.exports=petRoute