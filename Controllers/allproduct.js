const {petdataModel}=require("../Models/Pet.model")
const {careModel}=require("../Models/Care.model")
const {foodModel}=require("../Models/Food.model")
const {cartModel}=require("../Models/Cart.model")

//default url for pets collection
exports.petsdata=async(req,res)=>{
 let id= req.params.id
 try {
   let petData=await petdataModel.findById(id)
   res.status(200).json({
      sucess:true,
      data: petData,
      
   })

 } catch (error) {
   console.log(error)
 }

};

exports.foodsingledata=async(req,res)=>{
   let id= req.params.id
   try {
     let foodsingData=await foodModel.findById(id)
     res.status(200).json({
        sucess:true,

        data:foodsingData,
        
     })
  
   } catch (error) {
     console.log(error)
   }
  
  };


  exports.caresingledata=async(req,res)=>{
   let id= req.params.id
   console.log(id)
   try {
     let caresingData=await careModel.findById(id)
     res.status(200).json({
        sucess:true,
        data: caresingData,
        
     })
  
   } catch (error) {
     console.log(error)
   }
  
  };

//function to create pet data
//all pets route
exports.pets=async(req,res)=>{
   try{
   let petname=req.params.category;
  let {price,stock,color,sortBy,limit=16,page=1}=req.query;
  
  let temp={};
  temp.category=petname;
  if(price!==undefined){
   temp.price=price
  }
  if(stock!==undefined){
   temp.Stock=stock
  };
  if(color!==undefined){
   temp.color=color
  };
  let petbase;
  let sorts={};
  if(sortBy==undefined){
   petbase= await petdataModel.find(temp).limit(limit).skip((page-1)*limit)
  }
  else{
   if(sortBy=="asc"){
      sorts.price=1;
   }
   else if(sortBy=="desc"){
      sorts.price=-1;
   }
   petbase= await petdataModel.find(temp).sort(sorts).limit(limit).skip((page-1)*limit)
  }
 res.status(200).json({
    success:true,
    petbase
 })
}
catch(er){
   console.log(er)
}
};




//care get route
exports.careget=async(req,res)=>{
   try{
      let {price,sortBy,rating,used}=req.query;
      let temp={};
      if(price!==undefined){
         temp.price=price
      };
      if(rating!==undefined){
         temp.rating=rating
      };
      if(used!==undefined){
         temp.Usedfor=used
      }
      let caredata;
      let sorts={};
      if(sortBy==undefined){
         caredata=await careModel.find(temp)
      }
      else{
         if(sortBy=="asc"){
            sorts.Price=1;
         }
         else if(sortBy=="desc"){
            sorts.Price=-1
         }
         caredata= await careModel.find(temp).sort(sorts)
      }
       
      res.status(200).json({
         sucess:true,
         caredata
      });
   }
   catch(er){
      console.log(er)
   }
   
  };

exports.searchpets=async(req,res)=>{
   try{
      const {petname}=req.query;
      console.log(petname)
      if(petname=="" || petname==undefined){
         res.status(200).json({
            sucess:true,
            searchData:[]
         });
      }
      let searchData=await petdataModel.find({name:{$regex:petname}});
      res.status(200).json({
         sucess:true,
         searchData
      });
   }
   catch(er){
      console.log(er)
   }
}



//food get
exports.foodget=async(req,res)=>{
   try{
      let {price,sortBy,rating,used}=req.query;
      let temp={};
      if(price!==undefined){
         temp.price=price
      };
      if(rating!==undefined){
         temp.rating=rating
      };
      if(used!==undefined){
         temp.Usedfor=used
      }
      let food_data;
      let sorts={};
      if(sortBy==undefined){
         food_data=await foodModel.find(temp)
      }
      else{
         if(sortBy=="asc"){
            sorts.Price=1;
         }
         else if(sortBy=="desc"){
            sorts.Price=-1
         }
      
       food_data= await foodModel.find(temp).sort(sorts)
      }
       res.status(200).json({
         sucess:true,
         food_data
      });
   }
   catch(er){
      console.log(er)
   }
  
  };



//care route
exports.careCreate=async(req,res)=>{
   const carebase= await careModel.create(req.body)
   res.send(req.body).json({
      sucess:true,
      carebase
   });
  };

//food route
exports.foodCreate=async(req,res)=>{
   const foodbase=await foodModel.create(req.body)
   res.send(req.body).json({
      sucess:true,
      foodbase
   });
  };

  exports.petsCreate=async(req,res)=>{
   const foodbase=await petdataModel.create(req.body)
   res.send(req.body).json({
      sucess:true,
      foodbase
   });
  };

  
//cart route
exports.cartCreate = async (req, res) => {
   try {
     delete req.body._id;
     await cartModel.create(req.body);
     res.send(req.body);
   } catch (error) {
     console.log(error);
   }
 };
 
 exports.cartGet = async (req, res) => {
   try {
     let userCart=await cartModel.find({userID:req.body.userID});
     res.send(userCart);
   } catch (error) {
     console.log(error);
   }
 };

 exports.delcart = async (req, res) => {
   try {
      let delid=req.params.id;
     await cartModel.findByIdAndDelete(delid)
     res.send("success");
   } catch (error) {
     console.log(error);
   }
 };

 exports.delcartById = async (req, res) => {
      try {
         let delid=req.body.userID;
        await cartModel.deleteMany({userID:delid})
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };

    exports.allpets=async(req,res)=>{
      let {page=1}=req.query;
      try {
        let petData=await petdataModel.find().limit(10).skip((page-1)*10)
        res.status(200).json({
           sucess:true,
           data: petData,
           
        })
     
      } catch (error) {
        console.log(error)
      }
     
     };

     exports.deletepets = async (req, res) => {
      try {
         let id=req.params.id;
        await petdataModel.findByIdAndDelete(id)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };

    exports.deletegroom = async (req, res) => {
      try {
         let id=req.params.id;
        await careModel.findByIdAndDelete(id)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };

    exports.deletefood = async (req, res) => {
      try {
         let id=req.params.id;
        await foodModel.findByIdAndDelete(id)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };
      // update
    exports.updatefood = async (req, res) => {
      try {
         let id=req.params.id;
         let payload=req.body
        await foodModel.findByIdAndUpdate(id,payload)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };


    exports.updatepets = async (req, res) => {
      try {
         let id=req.params.id;
         let payload=req.body
        await petdataModel.findByIdAndUpdate(id,payload)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };


    exports.updategroom = async (req, res) => {
      try {
         let id=req.params.id;
         let payload=req.body
        await careModel.findByIdAndUpdate(id,payload)
        res.send("success");
      } catch (error) {
        console.log(error);
      }
    };

