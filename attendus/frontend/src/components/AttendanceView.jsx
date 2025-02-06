import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const AttendanceView = () => {

    const {user} = useAuth();
    const [attendance, setAttendance] = useState([]);

   useEffect(() =>{
    const fetchAttendance = async()=>{
        try {
            const res = await api.get(`/api/attendance/${user._id}`);
            setAttendance(res.data)

            
        } catch (error) {
            console.log(' error fetching attendance' , error);
            
        }
    }
    fetchAttendance();
   },[user] )


  return (
    <> 
    <h2> Your Attendance</h2>
       <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Marked By</th>
            </tr>
        </thead>
        <tbody>
            {attendance.map( (record) =>(

                <tr key={record._id} >
                    <td>{new Date(record.attendanceDate).toLocaleDateString()   }</td>
                    <td>{record.status}</td>
                    <td>{record.markedBy}</td>
                </tr>
            ))}
        </tbody>
       </table>
    </>
  )
}

export default AttendanceView