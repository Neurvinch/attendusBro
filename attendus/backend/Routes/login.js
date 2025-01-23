const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const Student = require('../Models/studentModel');

const router = express.Router();


router.post ("/student/login" ,async (res,req) =>{
    const {rollNo , dob ,name  } = req.body;

    const studentrn = await Student.findOne({rollNo});
       if(!studentrn || new Date(studentrn.dob).getTime !== new Date(dob).getTime ){
        return res.statusCode(400).json({message : "Invalid student details"});
       }
       
})