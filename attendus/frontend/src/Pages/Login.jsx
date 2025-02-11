import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const Login = () => {
    const [formData , setFormData] = useState({email : '', password : '',
       rollNo : '',
      roles : 'student',
    });

    const {Login} = useAuth();
    const navigate =  useNavigate();

const handleSubmitChange = async (e) =>{

    e.preventDefault();
    try { 
          await Login(formData);
          navigate('/profile');
        
    } catch (error) {
        alert('Login Failed')
    }
}

  return (
    <div>
    <form onSubmit={handleSubmitChange}>
            <input
             type = 'email'
             value = {formData.email}
             placeholder='Email'
             onChange={ (e) =>{
              setFormData({...formData , email : e.target.value})
              
             }}
            required
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
                  
                > Login</button>
                  </form>
         <p>
            Dont have an account? <a href="/signup">Signup</a>
         </p>
         </div>
  )
}

export default Login