const jwt = require('jsonwebtoken');
const {signupSchema , signinSchema } = require("../MidlleWare/Validators");
const { doHash,doHashValidation , hmacProcess  } = require('../Utils/Hashing')
const Student = require("../Models/studentModel");
const studentModel = require('../Models/studentModel');

exports.signup = async (req, res ) =>{
      const{ rollNo , password} = req.body;
      try {
           const { error, value} = signupSchema.validate({rollNo,password}); 
           if(error){
            return res.status(400).json({sucess : false , message: error.details[0].message})
           }
           
           const existingStudent = await studentModel.findOne({rollNo});

           if(existingStudent ){

            return res.status(401).json({sucess : false , message: 'Student already exists!'})
           }

           const hashedpassword  = await doHash(password, 12);

           const newStudent = new studentModel({
            rollNo,
            password : hashedpassword

           });

           const savedStudent = await newStudent.save();

           savedStudent.password = undefined;

           res.status(201).json({sucess : true , message: 'Student registered successfully!' ,savedStudent});

      } catch (error) {
         console.log(error);
      }

    
}