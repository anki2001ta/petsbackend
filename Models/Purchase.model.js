const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
    url:{
        type:String,
        required:[true,"Please Enter product url"]
    },
    name:{
        type:String,
        required:[true,"Please Enter product name"]
    },
    
    price:{
        type:Number
        
    },
    Price:{
        type:Number
       
     },
     userID:{
        type:String
     },
     date:{type:String
     },
   
});

const purchaseModel=mongoose.model("purchase",cartSchema)
module.exports={purchaseModel}