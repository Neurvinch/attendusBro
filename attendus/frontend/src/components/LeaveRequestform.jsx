import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const LeaveRequestform = () => {
    const {user} = useAuth();
    const [reason, setReason] = useState('');
    const [type ,setType] = useState('leave');
    const [message, setMessage] = useState('');

 const handleSubmit = async (e) =>{
     e.preventDefault();
      try {
        const res  = await api.post('/leave' ,{
            studentId: user._id,
            reason,
            type
        })
        setMessage(res.data.message);
        setReason('');
        
      } catch (error) {
         setMessage('Error creating leave request');
          console.log(error);
      }
 }



  return (
    <>
    <h3>LeaveRequestform</h3>
    <form>
        <label> Type</label>
          <select 
             value={type}
             onChange={(e) => setType(e.target.value)}
          >
             <option value='leave' >Leave</option>
             <option value= 'od'  >OD</option>
          </select>
<label>Reason</label>
   <textarea
     value={reason}
     onChange={(e) => setReason(e.target.value)}
     rows= '4'
     required
     
   />

   <button
     type='submit'
   >Submit</button>

    </form>
        
        {message && <p>{message}</p>}
    </>
  )
}

export default LeaveRequestform