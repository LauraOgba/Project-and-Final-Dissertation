
const express = require('express');
const path = require( 'path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config =require('./config/database');

//using mongoskin to connect the calendar to the database
const db = require('mongoskin').db("mongodb://localhost/mydb", { w: 0});
    db.bind('event');

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
const events = require('./routes/events');
//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);

app.use('/events', events);

//Index Route
app.get('/', (req, res) => {
   res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start server
app.listen(port, () => {
    console.log('Server Started on port' + port);

});

app.get('/event', function(req, res){
        db.event.insert({
            text:"My test event A",
            start_date: new Date(2018,8,1),
            end_date:   new Date(2018,8,5)
        });
        db.event.insert({
            text:"One more test event",
            start_date: new Date(2018,8,3),
            end_date:   new Date(2018,8,8),
            color: "#DD8616"
        });

        /*... skipping similar code for other test events...*/

        res.send("Test events were added to the database")
    });


    app.get('/data', function(req, res){
        db.event.find().toArray(function(err, data){
            //set id property for all records
            for (var i = 0; i < data.length; i++)
                data[i].id = data[i]._id;

            //output response
            res.send(data);
        });
        app.post('/data', function(req, res) {
            var data = req.body;

            //get operation type
            var mode = data["!nativeeditor_status"];
            //get id of record
            var sid = data.id;
            var tid = sid;

            //remove properties which we do not want to save in DB
            delete data.id;
            delete data["!nativeeditor_status"];

            //output confirmation response
            function update_response(err, result){
                if (err)
                    mode = "error";
                else if (mode == "inserted")
                    tid = data._id;

                res.setHeader("Content-Type","application/json");
                res.send({action: mode, sid: sid, tid: tid});

            }

            //run db operation
            if (mode == "updated")
                db.event.updateById( sid, data, update_response);
            else if (mode == "inserted")
                db.event.insert(data, update_response);
            else if (mode == "deleted")
                db.event.removeById( sid, update_response);
            else
                res.send("Not supported operation");

        });
    });
