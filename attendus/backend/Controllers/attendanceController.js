const AttendanceModel = require("../Models/AttendanceModel");


exports.markAttendance =  async(req,res) =>{

    if(!date || !students){
        return res.json({sucess : false , message : "Date and students are required"})
    }

    const{date ,students} = req.body ;

    try {  
        const records =  students.map( ( student) =>({
            studentId : student._id ,
            attendanceDate : date,
            status: student.status,
            department : req.user.department,
            markedBy : req.user._id
        }))
        await AttendanceModel.insertMany(records)
        res.json({sucess : true , message : "Attendance marked successfully"})
            
        
    } catch (error) {
        
        res.json({sucess : false , message : "Error marking attendance" })
    }
}

exports.getAttendance = async (req,res) =>{
    try {
        const records = await AttendanceModel.find({studentId: req.user._id}).populate('studentId');

        if(!records || records.length === 0){
            return res.status(404).json({sucess : false , message : "No attendance records found"})
        }
    
        res.json({sucess : true , data : records})
    } catch (error) {
        
        res.json({sucess : false , message : "Error getting attendance" })
    }
}


exports.updateAttendance = async (req,res) =>{
    try {
        const records = await AttendanceModel.findByIdAndUpdate( req.params.id, { status : req.body.status}, {new: true}) 

            res.json({message : "Attendance updated successfully" ,data : records})

             if(!records) {
                return res.status(404).json({sucess : false , message : "No attendance records found"})
             }
    } catch (error) {
         res.json({message : "Error updating attendance" ,data : error})
    }
}