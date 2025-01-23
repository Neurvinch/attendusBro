import React, { useState } from 'react'

const Login = () => {
    const[rollNo, setRollNo] = useState(0);
    const[dob,setDob] = useState('');
    const handleLogin = async (e) =>{
        e.prevantDefault();

        try {
            const response = await axios.post("" ,{rollNo,dob})
            
            localStorage.setItem("token",response.data.token);
            alert("You Can Go Ahead");
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
            
            type='date'
            value={dob}
            onChange={(e) =>{setDob(e.target.value)}}
            
            />
            <button
               type='submit'
            >Submit</button>
        
        
        </form>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Login