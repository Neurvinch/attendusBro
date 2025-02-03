import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
     
      const [dashData , setDashdata] = useState({
        attendance : [],
        marks : [],
        leaveRequest : [],
        announcements : []
      })

      useEffect( () =>{
        const fetchDashboardData = async() =>{
            try { 
                const [attendanceRes, marksRes , leaveReqRes , announcementsRes] = await Promise.all(
                    [
                        axios.get('http://localhost:5000/api/attendance'),
                        axios.get('http://localhost:5000/api/marks'),
                        axios.get('http://localhost:5000/api/leaveRequest'),
                        axios.get('http://localhost:5000/api/announcements')
                    ]
                );

                setDashdata({
                    attendance : attendanceRes.data,
                    marks : marksRes.data,
                    leaveRequest : leaveReqRes.data,
                    announcements : announcementsRes.data
                })
                
            } catch (error) {
                 console.error(' Error fetching data:', error);
            }
        }
        fetchDashboardData();
      } ,[])


  return (
    <div>
        <h1> Student Dashboard</h1>

        <div>
            
        </div>
    </div>
  )
}

export default Dashboard