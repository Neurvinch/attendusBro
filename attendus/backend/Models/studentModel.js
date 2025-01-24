const mongoose = require('mongoose');

const studentModelSchema = new mongoose.Schema({
    rollNo : {type : Number , required : true, unique : true  },
    dob : {type : Date , required : true  },
    name : {type : String , required : true  },

})

module.exports = mongoose.model('Student', studentModelSchema);