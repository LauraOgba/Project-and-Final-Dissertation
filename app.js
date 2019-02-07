const express = require('express');
const path = require( 'path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config =require('./config/database');

//Connect to database
mongoose.connect(config.database, {useNewUrlParser:true});

//On Connection
mongoose.connection.on('connected', () => {
    console.log('connected to database' +config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error' + config.database);
});

const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
   res.send('Invalid Endpoint');
});

//Start server
app.listen(port, () => {
    console.log('Server Started on port' + port);
    
});