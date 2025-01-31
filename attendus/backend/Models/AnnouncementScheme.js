const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {type : String , required : true},
    content : {type : String , required : true},
    author: { type : mongoose.Schema.types.ObjectId , ref : "UserModel" , required : true},
    attachments : {type : String},
    createdAt : {type: Date , deafult : Date.now}
})

module.exports = mongoose.model('Announcement', announcementSchema);

