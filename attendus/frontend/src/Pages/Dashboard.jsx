import React, { useEffect, useState } from 'react'
import AttendanceSummary from '../components/AttendanceSummary';
import TimeTableView from '../components/TimeTableView';
import { useAuth } from '../context/AuthContext';
import api from '../api';
import BadgeDisplay from '../components/BadgeDisplay';
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const {user} = useAuth();
    const [attendance , setAttendance] = useState([]);
    const [timeTable ,setTimeTable] = useState( {});
 const [percentage , setPercentage] = useState(0)
     
    useEffect(() =>{
      const fetchAttendance  = async () =>{
        if(user?.roles === 'student'){
          try { 
            const res = await api.get( ` /api/attendance/${user._id}` );
            setAttendance(res.data.data)

          
            
          } catch (error) {
             console.log(' error fetching attendance' , error);
          }
        }
       }
       fetchAttendance();
    },[ user] );

     useEffect( () =>{
      const fetchtimeTable  = async () =>{
        try {
         const endpoint = user?.roles ==='student ' ?
         `/timetable/class/${user.class}` 
         : `/timetable/staff/${user._department}`;
         const res= await api.get(endpoint);
         setTimeTable(res.data) 
          
        } catch (error) {
           console.log(' error fetching time table' , error);
        }
         
      }
      fetchtimeTable();
     } , [ user]);

  return (
    <div>
      <h1>Welcome, {user?.rollNo }  ({user?.roles})</h1>

      {user.roles ==='student'  && (
        <>
        <AttendanceSummary data={attendance} />
        <TimeTableView  schedule = {timeTable} />
        </>
      )} 
      
          
            { (user?.roles === 'staff' || user?.roles === 'hod') &&(
              <>
              <h2> Actions</h2>
                 <a href= '/markAttendance' >
                  Mark Attendance
                 </a>
                 < a  href = "/uploadMarks"> 
                  Upload Marks
                 </a>

                 <TimeTableView   schedule = {timeTable}  />
              
              </>
            )}
            <BadgeDisplay  attendancePercentage={percentage}   />
            
             
      
          </div>
  )
}

export default Dashboard