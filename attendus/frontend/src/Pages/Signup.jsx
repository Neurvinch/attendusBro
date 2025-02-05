import React, { useState } from 'react'

import axios from 'axios'

const Signup = () => {
    const [formData , setFormData] = useState({ email : '',
      password : '',
      rollNo : '',
      roles : 'student',
     
    })
         
    const [error,setError] = useState('');
    const[success , setSuccess] = useState('');

    const handleSubmit = async (e) =>{
      e.preventDefault();
      setError('');
      setSuccess('');


      if(!formData.email || !formData.password || !formData.rollNo || !formData.roles ){
        setError('Please fill all the fields');
        return;
        }
        
        try {
          const res = await axios.post('http://localhost:5000/api/auth/signup',formData); 

          if(res.data.success){
            setSuccess('User created successfully');
            setFormData({email : '',password : '',rollNo : '',roles : 'student'});

          }
          
          
        } catch (error) {
          setError(error.response.data.message);
          
        }

      }

  return (
    <div>
      <h2> Create Account</h2>
          <p> Register for instituional access</p>
          {error && <div>{error}</div>}
          {success && <div>{success}</div>}
          <form onSubmit={handleSubmit}>
            <input
             type = 'email'
             value = {formData.email}
             placeholder='Email'
             onChange={ (e) =>{
              setFormData({...formData , email : e.target.value})
              required
             }}
            
            />

             <input
               type = 'number'
               value = {formData.rollNo}
               placeholder = "Roll No"
               onChange = { (e) =>{
                setFormData({...formData , rollNo : e.target.value})
               }}
               required
             
             />

             <input
              type = 'password'
              value = {formData.password}
              placeholder = 'Password'
              onChange={ (e) =>{
                setFormData({...formData , password : e.target.value})
              }}
              required

             />

           <select 
              value = {formData.roles}
              onChange = { (e) =>{
                setFormData({...formData, roles : e.target.value})
              }}
              required
           >
              <option  value = 'student'  >student   </option>
              <option  value = 'staff'  >staff</option>
              <option  value = 'hod'   >hod</option>
           </select>

                <button type='submit'  
                  
                > Signup</button>
                  </form>
                <p> Alraedy have an account ? <a href='/login' > Login</a></p>
          
    </div>
  )

}

export default Signup