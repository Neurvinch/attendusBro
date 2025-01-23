const mongoose = require('mongoose')

const studentModelSchema = new mongoose.Schema({
    rollNo : {type : numer , required : true, unique : true  },
    dob : {type : Date , required : true  },
    name : {type : String , required : true  },

})

module.exports = mongoose.model('studentModel', studentModelSchema);