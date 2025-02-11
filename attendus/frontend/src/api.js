import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:5000',
    headers : {
        'Content-Type' : 'application/json',
    }
});
 api.interceptors.request.use(
     config =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
     }
 );


 export default {

    login : (formData) => api.post('/api/auth/signin' , formData),
    signup : ( userData) => api.post('/api/auth/signup' , userData),

//     // getProfile : () => api.get('/api/users/me'),
//     // updateProfile : ( data) => api.put('/api/users/me' , data),

//     getAttendance : () => api.get('/api/attendance'),
//     markAttendance : (data) => api.post('/api/attendnace/markatendance' , data),

//     getInternalMarks : () => api.get('/api/marks'),
//     addInternalsMarks : (data) => api.post('/api/addmarks' , data),

//     getTimeTable : () => api.get('/api/timetable'),


//     getUsers : () => api.get('/api/admin/users'),
    
 }