const mongoose = require("mongoose")

const internalMarksSchema = new mongoose.Schema({
    studentId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel', required : true},
    subject : {type : String , required : true},
    semester : {type : Number , required : true},
     marks :{type : Number , min: 0 , max : 100 , required : true},
     date : {type : Date , default : Date.now }
});
module.exports = mongoose.model("InternalMarks" , internalMarksSchema)