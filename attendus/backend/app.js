const express = require('express');
 const Login = require('./Routes/login');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://neuervinch:95144@cluster0.jignh9i.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // If necessary for debugging
} 
   
);

const app = express();
app.use(express.json());

app.use('/apiv1', Login );

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen( 5000 , () =>{
    console.log('listening on port 5000');
});