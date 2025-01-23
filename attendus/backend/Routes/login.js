const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const Student = require('../Models/studentModel').default;
const Staff =- require("../Models/staffModel")
const Hod = require("../Models/hodModel")
const router = express.Router();


router.post ("/student/login" ,async (res,req) =>{
    try {

        const {rollNo , dob } = req.body;
        const student = await Student.findOne({rollNo});
        if(!student){
        return res.statusCode(400).json({message : "student not found"});
         }

         if(new Date(student.dob).getTime() !== new Date(dob).getTime()) {
            return res.statusCode(400).json({message : "student not found"});
         }
      
         const token = jwt.sign({id : student._id},jwt_Secret_key,{expiresIn : '1h'});
         res.json({token});
    } catch (error) {
        res.statusCode(500).json({message : error.message});
    }
})

router.post ("/staff/login", async(res,req) =>{
    try { 
        const {userName , password} = req.body;
 
        const staff = await Staff.findOne({userName});
        if(!staff){
            return res.statusCode(400).json({message : "staff not found"});
        }

        if( !(await bcrypt.compare(password,staff.password))){
            return res.statusCode(400).json({message : "staff not found"});
        }

        const token = jwt.sign({id: staff._id} , jwt_Secret_key , {expiresIn : '1h'});
        res.json({token});
                     
    } catch (error) {
        res.statusCode(500).json({message : error.message});
        
    }
})

 router.post('/hod/login' , async (res,req) => {
       try {
        const {userName , password} = req.body;
            const hod = await Hod.findOne({userName});
            if(!hod){
                return res.statusCode(400).json({message : "hod not found"});
            }

            if(!(await bcrypt.compare(password,hod.password))){
                return res.statusCode(400).json({message : "hod not found"});
            }

            const token = jwt.sign({id: hod._id} , jwt_Secret_key , {expiresIn : '1h'});
            res.json({token});
            

       } catch (error) {
        res.statusCode(500).json({message : error.message});
        
       }    
});

module.exports = router;