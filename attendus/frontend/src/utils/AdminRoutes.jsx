
import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
const protecetdRoute =( {children}) =>{
    const {user,loading} = useAuth()

    if(loading) {
      return <div>Loading...</div>
    }
    return user ? children : <Navigate to = "/login"   />
 
 };
 
 const Adminroutes =( {children}) =>{
   const {user} = useAuth();
 
    const isAdmin  = user?.roles === 'hod' ||
    user?.roles === 'staff' ;

    return isAdmin ? children : <Navigate to ='/dashboard' /> ;
 }

 export default { protecetdRoute , Adminroutes};