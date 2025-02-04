import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const UploadMarks = () => {
    const {user} = useAuth()
    comst [file ,setFile] = useState(null);
    const [message,setMessage] = useState('');

   const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!file) {
        setMessage('Please select a file');
        return
    } 
     const formData = new FormData();
     formData.append('file',file);

     try { 
        const res = await api.post('/api/upload' , formData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }
    
    );
    setMessage(res.data.message);
        
     } catch (error) {
        setMessage('Error uploading file');
        console.log(error);
        
     }
   }


  return (
    <>
    <div>UploadMarks</div>

      <form onSubmit={handleSubmit}>
        <label> upload CSV File</label>
        <input
          type = 'file'
          accept='.csv'
          onChange={(e) =>{
            setFile(e.target.files[0])
          }}
          />

          <buton
             type = "submit"
            > Upload</buton>
      </form>
      {message && <p> {message}</p> }
    </>

  )
}

export default UploadMarks