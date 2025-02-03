import React, { useEffect, useState } from 'react'

const AttendanceSummary = () => {
    const[attendance ,setAttendance] = useState({
        present : 0,
        total : 0,
    });
    const [loading , setLoading] = useState(true);

    useEffect( () =>{
        const getchAttendance = async() =>{
            try {
                
            } catch (error) {
                
            }
        }
    } , [])


  return (
    <div>AttendanceSummary</div>
  )
}

export default AttendanceSummary