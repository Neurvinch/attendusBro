
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Pages/Login"
import './App.css'


function App() {
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(atob(token.split('.')[1] )) : null;


  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route  path = "/login" elemnt = {<Login/>} />
      <Route path = "/signup" element = {<Signup/>} />
      <Route
         path = "/dashboard"
         element = { token ?<Dashboard /> : <Navigate to ='/login'/>  

         }
      />

      <Route path = '/announcements'  element = {
        token ? <Announcements /> : <Navigate to ='/login'/>
      } />

      <Route
          path = "/profile" element = {
            token ? <Profile /> : <Navigate to= "/login"  />
          }
      />
      <Route
         path = '/admin'
         element = {
          user.roles === 'hod' || 'staff' ? <AdminPanel/> : <Navigate to = "/dashboard" />
         }
      />
    </Routes>
  <Footer/>
  </Router>
    
  )
}

export default App
