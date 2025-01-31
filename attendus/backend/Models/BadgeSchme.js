const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId , ref : "UserModel" , required : true},
    type: {type : String , enum : ['high attendance' , 'high marks' ,' student of the month' ,'techie of the month',] , required : true},
    awardedAt : {type : Date , default : Date.now},
    month : {type : String , required : true},
});

module.exports = mongoose.model("Badge" , badgeSchema)
