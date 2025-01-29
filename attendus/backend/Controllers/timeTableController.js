const express = require("express");
const { identifer } = require("../MidlleWare/identification");
const TimeTableModel = require("../Models/TimeTableModel");
const UserModel = require("../Models/UserModel");

const router = express.Router();

router.get('/',identifer(['student']) , async (req, res) =>{

    try {
        const timetable = await TimeTableModel.find({userId : req.user._id ,
            userType : req.user._id
        }).sort('day period')

        res.json({sucess : true , data : timetable})
    } catch (error) {
         res.status(500).json({sucess : false , message : error.message})
    }
})
router.post ('/', identifer(['staff' ,'hod'] ) , async (req,res) =>{

    try {
        const {day , period, subject , classRoom ,  userType , userId } = req.body;

        if( !day || !period || !subject || ! classRoom){ 
            return res.status(400).json({sucess : false , message : "All fields are required"})
        }

        const newEntry =  await TimeTableModel.create({
            day , period , subject , classRoom , userType , userId

        })

        await UserModel.findByIdAndUpdate( userId , {
            $push : {timetable : newEntry._id }
        })

        res.json({sucess : true , data : newEntry})     
        
    } catch (error) {
         res.status(500).json({sucess : false , message : error.message})
    }
})

router.put ('/', identifer(['staff' ,'hod'] ) , async (req,res) =>{
    try {
      const entry = await TimeTableModel.findById(req.params.id) 
      
        
      const updatedEntry = await TimeTableModel.findByIdAndUpdate(req.params.id , req.body , {new: true});

      res.json({sucess : true , data : updatedEntry})

    } catch (error) {
         res.status(500).json({sucess : false , message : error.message})
    }
});



router.delete ('/', identifer(['staff' ,'hod'] ) , async (req,res) =>{
    try { 
        const entry = await TimeTableModel.findById(req.params.id)


        await entry.remove();

        await UserModel.findByIdAndUpdate( entry.userId,{
            $pull : {timetable : entry._id }
        })

        res.json({sucess : true , message : "TimeTable entry deleted successfully"})      
    } catch (error) {
         res.status(500).json({sucess : false , message : error.message})
    }
})

router.get("/" , identifer(['hod'] ) , async (req , res) => {
    try {
        const users = await UserModel.find({
            roles : req.query.roles ,
            department : req.user.department

        }).select('name email rollNo roles')

        res.json({sucess : true , data : users})
    } catch (error) {
        res.status(500).json({sucess : false , message : error.message})
        
    }
})

module.exports = router