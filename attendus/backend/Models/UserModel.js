
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    rollNo : {type : Number ,
         required : [true , "RollNo is required"],
          unique : true ,
           trim: true  },


   password : {type : String ,  
    required : [true , "Password is required"] ,
    trim: true ,
     select: false  },

   email: { type: String , 
    required : [true , "Email is required"] ,
     unique : true , 
     trim: true  },


   roles:  {type: String 
    ,enum:[ 'student' ,'staff' , 'hod'] ,
     default : 'student' },

   deaprtment :  {type : String},

   

   verified: {
    type: Boolean,
    default: false
   },

   verificationCode: {
    type: String,
    select: false
   },
   verificationCodeValidation : {
    type: String, 
    select: false
   },

   forgotPasswordCode :{
    type: Number, 
    select: false
   },

   forgotPasswordCodeValidation :{
    type: Number,
    select: false
,
   },
   

} ,{timestamps : true} )

module.exports = mongoose.model('UserModel', UserSchema);