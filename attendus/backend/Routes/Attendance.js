const express = require('express');
const Attendance = require("../Controllers/attendanceController");
const router = express.Router();
const {identifer} = require("../MidlleWare/identification")



router.post ( "/markAttendance", identifer(['staff']),Attendance.markAttendance)
router.get ( "/getAttendance",identifer(['student']),Attendance.getAttendance)
router.put ("/updateAtendance" , identifer (['hod']), Attendance.updateAttendance);




module.exports = router