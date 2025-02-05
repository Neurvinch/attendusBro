import React, { useEffect } from 'react'
import {toast} from 'react-toastify';
const AttendanceSummary = ({data}) => {
    const total = data.lenght;
    const present  = data.filter((s)=>s.status === 'present').lenght
    const percentage = ((present/total) * 100 ).toFixed(1);

      useEffect( () =>{
         
        if(percentage < 75){
          toast.warning(`Your attendance is ${percentage}% (below the required one) `)
        }

      },[percentage])



  return (
    <> 
       <h3>AttendanceSummary</h3>
       <p> Total Days : {total}</p>
       <p>Present Days : {present}</p>
       <p>Attendance Percentage : {percentage}%</p>

  
  </> 
  )
}

export default AttendanceSummary