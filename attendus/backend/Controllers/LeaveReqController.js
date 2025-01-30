const express = require('express');
const { identifer } = require("../MidlleWare/identification");
const LeaveRequest = require('../Models/LeaveRequest');
const router = express.Router();


router.post('/',identifer(['student']) , async (req,res) =>{
    try { 
        const request = await  LeaveRequest.create ({
            ...req.body,
            student:req.user._id
        })
        res.json({sucess : true , data : request})
        
    } catch (error) {
         res.json({sucess : false , data : error, Message : "Error creating leave request"})
    }
} )

router.patch ('/' ,identifer(['hod' , 'staff']) ,async(req,res) =>{
    try {
        const request = await LeaveRequest.findById(req.params.id,

        {status  : req.body.status,
        approvedBy : req.user._id,
        comments : req.body.comments
        }, {new : true} )
         res.json({sucess : true , data : request})
    } catch (error) {
         res.json({sucess : false , data : error, Message : "Error updating leave request" })
         }
})

module.exports = router