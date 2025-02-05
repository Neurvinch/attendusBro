
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import InternalMarksView  from './components/InternalMarksView'
import UploadMarks   from './Pages/UploadMarks'

import AttendanceMarking from "./components/AttendnaceMarking"
import {AuthProvider , useAuth} from "./context/AuthContext"
import {ProtecetdRoute , Adminroutes } from "../src/utils/AdminRoutes"
import './App.css'
import Dashboard from './Pages/Dashboard';
import LeaveApproval from './Pages/LeaveApproval';
import LeaveRequestform from './components/LeaveRequestform';


function App() {


  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
         <Route path ="/" element={<Home/>} />
         <Route path ="/login" element={<Login/>} />
         <Route path ="/signup" element={<Signup/>} />

          <Route  element ={ <ProtecetdRoute/>} >
            <Route  path = '/dashboard' element = { <Dashboard/>}  />
            <Route  path = '/profile' element = {<Profile/>}  />
            <Route  path='/internalmarks'  element = { <InternalMarksView/>}/>
            <Route  path='/leaverequest'  element = {<LeaveRequestform/>}     />
          
          </Route>


          <Route element = {<Adminroutes/>} > 
             <Route  path = '/markAttendance' element= {<AttendanceMarking/>}  />
             <Route  path='/leaverequestapproval'  element = {<LeaveApproval/>} />
             <Route   path='/uploadmarks'  element= {<UploadMarks/>}      />
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
