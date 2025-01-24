import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const[rollNo, setRollNo] = useState(0);
    const[password,setpassword] = useState('');
    const handleLogin = async (e) =>{
        e.prevantDefault();

        try {
            const response = await axios.post( "http://localhost:5000/apiv1/student/login" ,{rollNo,password})
            
            localStorage.setItem("token",response.data.token);
            alert("You Can Go Ahead");
            console.log(response.data.token);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>
        <form onSubmit={handleLogin} >
            <input
               type='number'
               placeholder='RollNo'
               value={rollNo}
               onChange={(e) => setRollNo(e.target.value)}
            /> 
            <input
            
            type='string'
            value={password}
            onChange={(e) =>{setpassword(e.target.value)}}
            
            />
            <button
               type='submit'
            >Submit</button>
        
        
        </form>
       
    </div>
  )
}

export default Login