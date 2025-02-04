import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const AttendnaceMarking = () => {
  const {user} = useAuth();
  const [students ,setStudens] = useState([])
  const [date, setDate] = useState( new Date().toISOString().split('T')[0] )
 
   useEffect( () =>{
     const fetchStudents = async() =>{
      try {  
        const res = await api.get(
          `/students?department = ${user.department}`
        )
        setStudens(res.data.map( (students) =>({
          ...students,
          present : true
      })))
        
      } catch (error) {
         console.error(error)
      }

     }
     fetchStudents()
   } , [ user])

   const handleSubmit = async (e) =>{
    e.preventDefault()
    try { 
       await api.post('/api/attendnace/markatendance' , {date ,
         records : students.map( (student) =>(
          {
            studentId : student._id,
            status : student.present ? 'present' : 'absent',
          }
         )),
       });
       alert('Attendance marked successfully')
    } catch (error) {
       console.error(error)
    }
   }
 
 
  return (
    <>
      <h2> Attendance Marking</h2>

      <form  onSubmit={handleSubmit} >

        <label>Date</label>
        <input
          type='date'
          value = {date}
          onChange={(e) =>{
            setDate(e.target.value)
          }}
          required
        
        />


           <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>RollNo</th>
                <th>Present?</th>
              </tr>
            </thead>
            <tbody>
              {students.map ( ( student) => (
                  <tr key = {student._id}>
                    <td>{student.email}</td>
                    <td>{student.rollNo}</td>
 
                   <td>
                     <input  
                       type = 'checkbox'
                       checked = {student.present}
                       onChange={(e) =>{
                        const newStduents = [...students]
                        const target =  newStduents.find(
                          (s) =>  s._id === student._id
                        );
                        target.present = e.target.checked
                        setStudens(newStduents)
                       }}
                       
                     />

                   </td>
                  </tr>
              ))}
            </tbody>
           </table>
           <button
            type='submit'
           > Mark Attendance</button>
      </form>
    </>
  )
}

export default AttendnaceMarking