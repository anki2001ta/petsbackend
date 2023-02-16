const express=require("express");
const { petsdata,pets,careCreate,foodCreate,careget,foodget} = require("../Controllers/allproduct");

const petRoute=express.Router()
petRoute.use(express.json())
petRoute.route("/:id").get(petsdata)
petRoute.route("/:category").get(pets)
petRoute.route("/care").post(careCreate)
petRoute.route("/food").post(foodCreate)
petRoute.route("/care/groom").get(careget)
petRoute.route("/food").get(foodCreate)
petRoute.route("/food/feed").get(foodget)

module.exports=petRoute