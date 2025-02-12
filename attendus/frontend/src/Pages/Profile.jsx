import React, { useEffect, useState } from 'react'
 import {useAuth} from '../context/AuthContext'
import api from '../api';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const {user} =   useAuth();
    const Navigate = useNavigate();
    const [formData , setformData] = useState({
        email : '',
        rollNo : '',
        roles:  '',
        department : '',
        class: ''
    }) ;

    useEffect( () =>{

        if(user) {
            setformData({
                email : user.email,
                rollNo : user.rollNo,
                roles : user.roles,
                deaprtment : user.deaprtment || '' ,
                class : user.class || ''
            })
        }
    } , [user ])


   const handleSubmit =  async (e) =>{
    e.preventDefault();
    try {   
        await api.patch(`/api/users/${user._id}` , formData) 
        alert('Profile updated successfully')
        Navigate('/dashboard')
        
    } catch (error) {
         console.error("error updating profile", error);
    }
   }


  return (
    <>
       <h1>Profile</h1>
       <form onSubmit={handleSubmit}>
         <label>Email</label>
         <input
           type='email'
            value={formData.email}
            onChange={ (e) =>{
                setformData({...formData , email : e.target.value})
            }}
         />

         <label>Roll No</label>
         <input
           type='number'
            value={formData.rollNo}
            onChange={ (e) =>{
                setformData({...formData , rollNo : e.target.value})
            }}
         />
    {user?.roles === 'student' && (
        <>
         <label>Roles</label>
         <input
           type='text'
            value={formData.roles}
            onChange={ (e) =>{
                setformData({...formData , roles : e.target.value})
            }}
          
          />
          </>
        )}

            <label>Department</label>
            <input
            type='text'
            value={formData.department}
            onChange={ (e) =>{
                setformData({...formData , department : e.target.value})
                }}
                />

                {user?.roles === 'student' && (
                    <>
                <label>class</label>
                <input
                type='text'
                value={formData.class}
                onChange={ (e) =>{
                    setformData({...formData , class : e.target.value})
                    }}
                    />
                    </>
                    )}

                    <button 
                    type = "submit" >Update</button>                    
       </form>
    
    
    </>
  )
}

export default Profile