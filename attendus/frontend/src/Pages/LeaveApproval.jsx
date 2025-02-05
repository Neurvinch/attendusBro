import React, { useEffect, useState } from 'react'
import api from '../api';

const LeaveApproval = () => {
    const {user} = useAuth();
    const[requests, setRequests] = useState([]);
     
    useEffect( () =>{
        const fetchRequests = async () =>{
            try {

                const res = await api.get('/leave' );
                setRequests(res.data)
                
            } catch (error) {
                
                console.log(' error fetching requests' , error);
            }
        }
        fetchRequests();
    },[] );

    const handleApproval = async  (id) =>
        {
            try {
                await api.patch(`/leave/${id}` , {
                    status: 'approved'
                })
                setRequests( (prev)=>{
                    prev.map(( req)=>(
                        req._id === id ? {...req , status : 'approved'} : req
                    ) )
                })
                
            } catch (error) {
                 console.log(' error fetching requests' , error);
            }
        };

        const handleReject =  async (id) =>{
            try {
                await api.patch(`/leave${id}`,{
                    status: 'rejected'
                });
                setRequests( (prev) =>{
                    prev.map( (req) =>(
                        req._id === id ? {...req , status : 'rejected'} : req
                    ))
                })
                
            } catch (error) {
                 console.log(' error fetching requests' , error);
            }
        }


  return (<>
    <div>LeaveApproval</div>
  <table>
    <thead>
        <tr>
            <th> Student</th>
            <th> Leave Type</th>
            <th>Reason</th>
            <th>status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        { requests.map ( (req) =>(
            <tr key={req._id}>
                <td>{req.student.rollNo}</td>
                <td>{req.type}</td>
                <td>{req.reason}</td>
                <td>{req.status}</td>
                <td>
                    {req.status === 'pending' && (
                        <>
                        <button  onClick={() => handleApproval(req._id)} >
                            Approve
                        </button>
                        <button 
                           onClick={()=> handleReject(req._id)}
                        >
                             
                            Reject</button>
                    
                        </>
                    )}
                </td>
                 </tr>
        ))}
    </tbody>
  </table>

    </>
      )
}

export default LeaveApproval