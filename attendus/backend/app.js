const express = require('express');
 const Login = require('./Routes/login');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naveen:95144@cluster0.ij3t1.mongodb.net/' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());

app.use('/apiv1', Login );

app.listen( 5000 , () =>{
    console.log('listening on port 5000');
});