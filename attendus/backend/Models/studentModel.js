const mongoose = require('mongoose');

const studentModelSchema = new mongoose.Schema({
    rollNo : {type : Number , required : true, unique : true  },
   password : {type : Number , required : true  },
    name : {type : String , required : true  },

})

module.exports = mongoose.model('Student', studentModelSchema);