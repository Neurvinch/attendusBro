import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth} from "../context/AuthContext"
const Navbar = () => {
     const  {user , logout  } = useAuth();
  return (
    <div>

        <Link  to = '/'  >   AttendUS</Link>
        {
          user? (
            <>
             <Link to= '/dashboard' >
               Dashboard
             </Link>

         
         
          {(user.roles === 'staff' || user.roles ==="hod") && (
            <Link to ='/markAttendance' >
              Mark Attendance
            </Link>
          )}

        <Link to= '/profile' >
           Profile
        </Link>

        <button
         onClick={logout}
         >
            Logout
        </button>
        </>
          ) :(
            <>
            <Link to = '/login'>
            Login
              </Link>
              <Link to = '/signup'>
              
              Sigup</Link>
            </>
          
            )}
       </div>
  )
}

export default Navbar
