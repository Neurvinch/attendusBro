const Joi = require("joi");

exports.signupSchema = Joi.object({
    rollNo : Joi.number().required(),
    password : Joi.string().required().pattern( new  RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')),

});

exports.SigninSchema = Joi.object({
    rollNo : Joi.number().required(),
    passWord : Joi.string().required().pattern( new  RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')),
})