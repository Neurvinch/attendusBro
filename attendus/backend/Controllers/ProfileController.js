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

exports.updateProfile =  async(req,res) =>{
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new : true
            }
        )
        res.json( {success : true , data : updateUser})
        
    } catch (error) {
        res.json({sucess : false , message : error.message})
        
    }
} 

