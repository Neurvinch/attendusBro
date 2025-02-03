import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../api';

const AuthContext = createContext() 
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = usestate(true);

    useEffect( () =>{
        const checkAuth = async () =>{
            try {
                const token = localStorage.getItem('token');
                if(token){
                    const response = await api.getProfile();
                    setUser(response.data);
                }
                
            } catch (error) {
                console.error(error);
                logout();

                
            }
            finally{
                setLoading(false);
            }
        }
        checkAuth();
    } ,[])

            const login = async (credentials) =>{
                try {
                    const res = await api.login(credentials);
                    localStorage.setItem('token' , res.data.token);
                    setUser(res.data.user);
                    
                } catch (error) {
                     console.error(error);
                }

            }

            const logout = () =>{
                localStorage.removeItem('token');
                setUser(null);
            }

  return (
    <AuthContext.provider value={{user , login , logout , loading}}>
        {children}
    </AuthContext.provider>
  )
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};