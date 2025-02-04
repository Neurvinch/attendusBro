import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const InternalMarksView = () => {
    const {user} = useAuth();
    const [marks,setMarks] = useState([]);

      useEffect( () =>{
        const fetchMarks =  async () =>{
            try { 
                const res = await api.get(`/marks/${user.id}` )
                setMarks(res.data)
                
            } catch (error) {
                console.log(' error fetching marks' , error);
            }
        }
        fetchMarks();
      } , [user] )

  return (
    <>
    <div>InternalMarksView</div>
     <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Mark</th>
            </tr>
        </thead>
        <tbody>
            {marks.map( (mark) =>(
                <tr key={mark.id}>
                    <td>{mark.subject}</td>
                    <td>{mark.score}</td>
                </tr>
            ))}
        </tbody>
     </table>
 
    </>
  )
}

export default InternalMarksView