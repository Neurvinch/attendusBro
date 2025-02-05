const express = require('express');
const LoginAll = require("./Routes/login")
const AttendanceAll = require("./Routes/Attendance")
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');


mongoose.connect('mongodb+srv://naveen:95144@cluster0.ij3t1.mongodb.net/').then ( () =>{
    console.log('database connected');
}) .catch((error) =>{
    console.log(error)
} )

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));

app.use("/api/auth",LoginAll)
app.use("/api/attendance",AttendanceAll )


 
   






// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });

app.listen( 5000 , () =>{
    console.log('listening on port 5000');
});