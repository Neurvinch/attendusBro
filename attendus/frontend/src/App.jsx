
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import {AuthProvider , useAuth} from "./context/AuthContext"

import './App.css'
import Dashboard from './Pages/Dashboard';


function App() {


  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
         <Route path ="/" element={<Home/>} />
         <Route path ="/login" element={<Login/>} />
         <Route path ="/signup" element={<Signup/>} />
          <Route   path = '/dashboard' element= {  <Dashboard/> } />

      </Routes>
      
    </Router>
 </AuthProvider>

    
  )
}

const protecetdRoute =( {children}) =>{
   const {user} = useAuth()
   return user ? children : <Navigate to = "/login"   />

};

const Adminroutes =( {children}) =>{
  const {user} = useAuth();

  return user?.roles === 'hod' || 'staff' ? children : <Navigate  to ='/dashboard' />
}



export default App
