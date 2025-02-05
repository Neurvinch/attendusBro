
import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
export const ProtecetdRoute =( {children}) =>{
    const {user,loading} = useAuth()

    if(loading) {
      return <div>Loading...</div>
    }
    return user ? children : <Navigate to = "/login"   />
 
 };
 
export  const Adminroutes =( {children}) =>{
   const {user} = useAuth();
 
    const isAdmin  = user?.roles === 'hod' ||
    user?.roles === 'staff' ;

    return isAdmin ? children : <Navigate to ='/dashboard' /> ;
 }

 