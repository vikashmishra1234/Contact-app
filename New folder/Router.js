import express  from "express";
import User from './model.js';

const Router = express.Router();


Router.post('/add',async(req,res)=>{

   try {

     let exits = await User.findOne({phone:req.body.phone});
     
     if(exits){
        return res.status(200).json({error:'nuber already saved'});
     }

     const newData = await User(req.body);
     await newData.save().then(()=>{
        console.log('contact saved')
        res.status(200).json({msg:"contact saved"})
     })
    } catch (error) {
        console.log("conatact not saved")
        return res.status(200).json({error:"something went wrong"})
    
   }

});

Router.post('/getdata',async(req,res)=>{

   let Email = req.body.email;
   console.log(req.body)


   try {
      
      let userData = await User.find({email: Email})
      if(!userData){
         return res.json({error:"user not exits with this email"})
      }
   
    return res.status(200).json(userData)
   } catch (error) {
      return res.json({error:"unable to fetch the database"})
      
   }
  

})


export default Router;