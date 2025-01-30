const AttendanceModel = require('../Models/AttendanceModel');
const Notification = require('../Models/Notification');

const checkAttendance = async ( studentId) =>{

    const totalDays = await AttendanceModel.countDocuments({studentId})

    const presntDays  = await AttendanceModel.countDocuments({ studentId , status : "Present"})
 
    
    const percentage = (presntDays / totalDays) * 100 || 0 ;

    if(percentage < 75) {
        await Notification.create({
            userId: studentId,
            message: `Your attendance is ${percentage}%`
        })
    }
}

module.exports = {checkAttendance}