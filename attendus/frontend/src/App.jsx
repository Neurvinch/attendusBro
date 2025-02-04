
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import AttendanceMarking from "./components/AttendnaceMarking"
import {AuthProvider , useAuth} from "./context/AuthContext"
import {protecetdRoute , Adminroutes } from "./utils/AdminRoutes"

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

          <Route  element={<protecetdRoute/>} >
            <Route  path = '/dashboard' element = { <Dashboard/>}  />
            <Route  path = '/profile' element = {<Profile/>}  />
          
          </Route>


          <Route element = {<Adminroutes/>} > 
             <Route  path = '/markAttendance' element= {<AttendanceMarking/>}  />
          </Route>

          <Route  path ='*'  element = {
            <Navigate to= "/dashboard" />
          }  />

      </Routes>
      
    </Router>
 </AuthProvider>

    
  )
}




export default App
