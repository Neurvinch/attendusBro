const express = require('express');
const { identifer } = require('../MidlleWare/identification');
const Profilectrl = require('../Controllers/ProfileController');
const router = express.Router();

router.patch( '/users/:id' ,identifer(['student']) ,Profilectrl.updateProfile )

module.exports = router