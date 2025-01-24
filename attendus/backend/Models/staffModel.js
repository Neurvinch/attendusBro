const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    userName: {type: String, required: true , unique : true},
    password : {type: String, required: true}, 
});

module.exports = mongoose.model('staffModel',staffSchema)