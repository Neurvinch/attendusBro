import { Schema, model } from 'mongoose';

const studentModelSchema = new Schema({
    rollNo : {type : Number , required : true, unique : true  },
    dob : {type : Date , required : true  },
    name : {type : String , required : true  },

})

export default model('studentModel', studentModelSchema);