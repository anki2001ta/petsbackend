const mongoose=require("mongoose");
const purchaseSchema=mongoose.Schema({
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
     date:{
        type:String
     },
   
});

const purchaseModel=mongoose.model("purchase",purchaseSchema)
module.exports={purchaseModel}