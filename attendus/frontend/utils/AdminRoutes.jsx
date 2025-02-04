
import { Navigate } from "react-router-dom";
import {useAuth} from "../src/context/AuthContext"
const protecetdRoute =( {children}) =>{
    const {user} = useAuth()
    return user ? children : <Navigate to = "/login"   />
 
 };
 
 const Adminroutes =( {children}) =>{
   const {user} = useAuth();
 
    const isAdmin  = user?.roles === 'hod' ||
    user?.roles === 'staff' ;

    return isAdmin ? children : <Navigate to ='/dashboard' /> ;
 }

 export default { protecetdRoute , Adminroutes};