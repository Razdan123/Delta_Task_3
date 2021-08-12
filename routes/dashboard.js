const express = require("express");
const router = express.Router();
const Newteam = require("./models/newteams");
const Register = require("./models/registers");


//new team registration
router.post('/dashboard',async (req,res)=>{
     try { 
   
       const registerTeam = new Newteam({
         
         teamname: req.body.teamname,
         uniquecode: req.body.uniquecode,
         date: req.body.date
       })
   
       const teamname = req.body.teamname;
       const registeredTeam =  await registerTeam.save();
       res.status(201).render("dashboard",{
   
         teamname: teamname,
       });
       
     } catch (error) {
       res.status(400).send(error);
     }
   });
   
   module.exports = router;