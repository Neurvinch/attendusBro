import axios from "axios";
import { useState } from "react"


const Signup = () => {
    const [formData , setformData] = useState({
        rollNo : "", 
        password : "",
        email : "",
     role:'student'})


     const handleSubmit =  async (e) =>{
        e.prevantDeafault();

        try {
            const response = await axios.post("" , formData)

            console.log(response.data)
        } catch (error) {
             console.error(error.response?.data ?.message || "Error signing up");
        }

     }
  return (
    <div>Signup</div>
  )
}

export default Signup