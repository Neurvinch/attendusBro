const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId , ref : "UserModel" , required: true },
    day : {type : String , enum: ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"] , required : true},
    period: Number,
    subject : String,
    staff : {type : mongoose.Schema.Types.ObjectId , ref : "UserModel" , required: true},
    classRoom :  String,
    userType : {type : String , enum : ['student' , 'staff' , 'hod'] , required : true}

})
module.exports = mongoose.model("TimeTableModel" , TimeTableSchema)