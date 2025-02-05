import React, { useEffect } from 'react'
import {toast} from "react-toastify";
import { useAuth } from '../context/AuthContext';

const BadgeDisplay = ({attendancePercentage}) => {
       const {user} = useAuth();;
      
        useEffect( () =>{
            if(attendancePercentage>= 75  ){
                toast.success( "Congratulations! you've earned the Consistent Attendance Badge !");
            }
            
        },[attendancePercentage])


  return (
     <>
        <h3>Your Badge</h3>
        {attendancePercentage >= 75 && (
            <div> Consistent Attendance (75%+)</div>
        )}
     </>
  )
}

export default BadgeDisplay