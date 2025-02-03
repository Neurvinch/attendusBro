import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth} from "../context/AuthContext"
const Navbar = () => {
     const  {user , logout  } = useAuth();
  return (
    <div>

        <Link  to = '/'  >   Home</Link>

        {user ? (
            <>
              <Link to =' /dashboard'> Dashboard </Link>
              <button onClick={logout} >Logout</button>
            </>
        ) : (
            <>
               <Link to= '/login' > Login</Link>
               <Link to ='/signup' > Signup</Link>
             </>
        )}
    </div>
  )
}

export default Navbar
