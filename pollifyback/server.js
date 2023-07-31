const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const { Poll } = require('./models/pollschema');

//initilze express.js
const app = express();

//to receive json data
app.use(express.json());

//initilze cors 
app.use(cors({
    origin: '*'
}));

//connect mongobd
mongoose.connect('mongodb+srv://mjnvsai:mjnvsai@cluster0.kc6nhff.mongodb.net/firstdb?retryWrites=true&w=majority').then(
    console.log("Mongo Db Atlas is connected Sucessfully")
);


//auth api's
app.use('/api/auth', auth);

//users api's
app.use('/api/user', user);

app.get("/retrive", (req, res) => {
    Poll.find().then(found => res.json(found) )
} )

//run server
app.listen(5000, () => console.log('server is running on port number 5000'));