import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api';

const AnnouncementFeed = () => {
    const {user} = useAuth();
    const [announcements , setAnnouncements] = useState([]);
    const [newAnnouncements , ,setNewAnnouncements] = useState([]);

      useEffect( () =>{
       const fetchAnnouncements = async () =>{
        try {  
            const res = await api.get('./annoucements');
            setAnnouncements(res.data);
            
        } catch (error) {
             console.error( 'error fetching announcements  ' ,error);
        }
       }

        fetchAnnouncements();
      } ,[] )

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        try {
            const res = await api.post('/annoucements' ,{
                text: newAnnouncements,
                author : user._id
            });
            setNewAnnouncements([res.data, ...announcements]);
            setNewAnnouncements('')
            
        } catch (error) {
             console.error('error posting announcement', error);
        }
    }


  return (
    <>
    <div>AnnouncementFeed</div>
      {(user?.roles === 'staff' || user?.roles === 'hod') && (
        <form>
            <  textarea
            value={newAnnouncements}
            onChange={(e) =>{
                setNewAnnouncements(e.target.value)
                
            }}
            placeholder='New Announcement ... '
            rows='3'
             
            />
     <button
     type='submit'
     >Post</button>


        </form>
      )}

      {announcements.map((announcement ) =>(
        <>
        <p>{ announcement.text }</p>
        <P>{ announcement.author }</P>
        <span>
        { new Date(announcement.createdAt).toLocaleDateString()}
        </span>
  
  </>
      ) )}
 
    </>
  )
}

export default AnnouncementFeed