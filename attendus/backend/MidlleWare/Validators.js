const Joi = require("joi");

exports.signupSchema = Joi.object({
    rollNo : Joi.number().required(),
    password : Joi.string().required().pattern( new  RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')),
    email : Joi.string().min(6).max(80).required().email({
        tlds:{allow : ['com' , 'net' , 'in' , 'org']},
    }),
    roles : Joi.string().valid('student' , 'staff' , 'hod').required(),
    department : Joi.string().required(),
     

});

exports.signinSchema = Joi.object({
    rollNo : Joi.number().required(),
    password : Joi.string().required().pattern( new  RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')),
    email : Joi.string().min(6).max(80).required().email({
        tlds:{allow : ['com' , 'net' , 'in' , 'org']},
    }),
    roles : Joi.string().valid('student' , 'staff' , 'hod').required(),
    department : Joi.string().required(),
})