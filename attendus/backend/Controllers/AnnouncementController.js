const express = require("express");
const router = express.Router();
const identifier = require("../MidlleWare/identification");
const Annoucement = require("../Models/AnnouncementScheme")

router.get('/', identifier() , async(req,res) =>{
    const announcements = await Annoucement.find().sort('-createdAt')
    res.json({sucess : true , data : announcements})
} );

router .post("/" , identifier(['staff' , 'hod']) , async (req,res) =>{
    
    const annoucement = await Annoucement.create({
        ...req.body,
        author : req.user._id
    });
    res.status(201).json({sucess : true , data : annoucement})
})