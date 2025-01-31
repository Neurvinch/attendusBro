const router = require("express").Router();
const identifier = require("../MidlleWare/identification");
const UserModel = require("../Models/UserModel");


router.get('/', identifier(['student']) ,   async (req , res) =>{

    try {
        const notification = await UserModel.findById({
            userId : req.user._id
        }).sort('-createdAt')

        res.json({sucess : true , data : notification})
        
    } catch (error) {
        
        res.json({sucess : false , message : error.message})
    }

});
