const express = require("express");
const { identifer } = require("../MidlleWare/identification");
const UserModel = require("../Models/UserModel");
const router = express.Router();
// add validators;


router.get("/student", identifer(['student']) , async (req,res) =>{
    try { 
        const student = await UserModel.findById(req.user.id)
        .select( ' rollNo email department class' )
        .populate('timetable' , 'day  subject period class')

        res.json({sucess : true , data : student})

        
    } catch (error) {
         res.json({sucess : false , message : error.message})
    }
})

module.exports = router