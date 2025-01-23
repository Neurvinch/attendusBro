const express = require('express');
const mongoose = require('mongoose');
const LogInRoutes = require('./Routes/login');


mongoose.connect('' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());

app.use('/apiv1/', LogInRoutes);

app.listen( 5000 , () =>{
    console.log('listening on port 5000');
});