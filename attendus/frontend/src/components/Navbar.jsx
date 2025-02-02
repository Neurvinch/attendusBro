import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {

    const token = localStorage.getItem('token');
    const user = token ? JSON.parse(atob(token.split('.')[1] )) : null;

   return (
    <nav>
        <Link to ='/' >Home </Link>
        { token && (
            <>
                <Link to ='/dashboard' >Dashboard </Link>
                <Link to ='/profile' >Profile </Link>
                <Link to ='/announcements' >Announcements </Link>

                {user.roles === 'hod ' || 'staff' && (
                    <Link to = '/admin' >Admin</Link>
                )}
            </>
        )}
       { token ? ( 
        <>
        <button 
          onClick={ () =>{
            localStorage.removeItem('token');
            window.location.reload();
            }}
        >Logout</button>
        </>
        ) : (

            <>
            <Link to ="/login" > Login</Link>
            <Link to="/signup" >Signup</Link>
            </>
        )   }    
    </nav>
  )
}

export default Navbar