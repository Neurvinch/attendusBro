const jwt = require('jsonwebtoken');
const {signupSchema , signinSchema} = require("../MidlleWare/Validators");
const { doHash,doHashValidation , hmacProcess  } = require('../Utils/Hashing')

const secret_key = process.env.Secret_key 
const UserModel = require('../Models/UserModel');

exports.signup = async (req, res ) =>{
      const{ rollNo , password,email, roles , department} = req.body;
      try {
           const { error, value} = signupSchema.validate({rollNo,password ,email, roles , department}); 
           if(error){
            return res.status(400).json({sucess : false , message: error.details[0].message})
           }
           
           const existingStudent = await UserModel.findOne({rollNo});

           if(existingStudent ){

            return res.status(401).json({sucess : false , message: 'Student already exists!'})
           }

           const hashedpassword  = await doHash(password, 12);

           const newStudent = new UserModel({
            rollNo,
            password : hashedpassword,
            email,
            roles,
            department

           });

            
           const savedStudent = await newStudent.save();

           savedStudent.password = undefined;

           res.status(201).json({sucess : true , message: 'Student registered successfully!' ,savedStudent});

      } catch (error) {
         console.log(error);
      }

    
}

exports.signin = async(req,res) =>{
      const {rollNo , password,email, roles , department} = req.body;

      try { 
            const {error, value} = signinSchema.validate({rollNo,password,email,roles,department});
            
            if(error){
                  return res.status(400).json({sucess : false , message: error.details[0].message})
            }

            const existingStudent = await UserModel.findOne({rollNo,roles}).select('+password')

            if(!existingStudent){
                  return res.status(401).json({sucess : false , message: 'Student does not exist!'})
            }

            const result = await doHashValidation(password , existingStudent.password);

            if(!result){
                  return res.status(401).json({sucess : false , message: 'Invalid password'})
            }

            const token = jwt.sign({studentId : existingStudent._id ,
                  rollNo : existingStudent.rollNo,
                  verified : existingStudent.verified , role : existingStudent.roles } ,secret_key  , {
                        expiresIn : '8h',
                  });
// seeting token in the cookie
                  res.cookie( 'Authorization' , 'Bearer' + token,{
                        expiresIn : new Date(Date.now() + 8 * 3600000),
                        httpOnly : process.env.Node_ENV ===  "production",
                        secure : process.env.Node_ENV ===  "production",
                  }).json({sucess : true , token , message : 'Student logged in successfully'});



      } catch (error) {
            console.log(error);
            
      }
}


exports.signOut = async (req,res) =>{
      res.clearCookie('Authorization');
      res.status(200).json({sucess : true , message : 'Student logged out successfully'});
}
