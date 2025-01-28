const mongoose = require('mongoose');

const studentModelSchema = new mongoose.Schema({
    rollNo : {type : Number , required : [true , "RollNo is required"], unique : true , trim: true  },
   password : {type : String , required : [true , "Password is required"] ,trim: true , select: false  },
   

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

module.exports = mongoose.model('StudentModel', studentModelSchema);