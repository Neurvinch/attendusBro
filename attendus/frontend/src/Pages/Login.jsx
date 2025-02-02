import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [formData , setFormData] = useState({email : "", password : ""});
    const navigate =  useNavigate();

const handleSubmitChange = async (e) =>{

    e.preventDefault();
    try { 
        const res = await axios.post('http://localhost:5000/api/auth/student/login',formData);
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
        
    } catch (error) {
        alert('Login Failed')
    }
}

  return (
    <div>
    <form>
        <input
         type="email"
         value={formData.email}
         placeholder='Email'
         onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
         type="password"
         value={formData.password}
         placeholder='Password'
         onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button
         type="submit"
        >
            Login
        </button>
    </form>
         <p>
            Dont have an account? <a href="/signup">Signup</a>
         </p>
         </div>
  )
}

export default Login