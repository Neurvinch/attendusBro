const mongoose = require("mongoose");

const LeaveReqSchema = new mongoose.Schema({
    studentId : {type:mongoose.Schema.Types.ObjectId , ref : "UserModel" , required : true},
    type : {type: String , enum : ['leave', 'od'] , required : true},
    startDate : {type : Date, required : true},
    endDate : {type : Date, required : true},
    reason : String,
    status : {type: String , enums:['pending','approved', 'rejected' ] , default : 'pending'},
    approvedBy : {type : mongoose.Schema.Types.ObjectId , ref : "UserModel"},
    comments: String
})

module.exports = mongoose.model("LeaveRequestModel" , LeaveReqSchema)