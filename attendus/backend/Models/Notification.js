const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: {type : mongoose.Schema.Types.ObjectId , ref : "UserModel" , required : true},
    message: {type : String , required : true},
    isRead : {type : Boolean , default : false},
    createdAt : {type : Date , default : Date.now}
})

module.exports = mongoose.model("NotificationModel" , notificationSchema)