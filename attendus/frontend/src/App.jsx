
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./Pages/Login"
import './App.css'


function App() {
  <Router>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route  path = "/login" elemnt = {<Login/>} />
      <Route path = "/signup" element = {<Signup />} />
    </Routes>
  
  </Router>

  return (
    
  )
}

export default App
