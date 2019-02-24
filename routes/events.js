const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Event = require('../models/events');


//Register
router.post('/study', (req, res, next) =>{
    let newEvent = new Event({
        title: req.body.title,
        location: req.body.location,
        start:req.body.start,
        end: req.body.end
    });

    Event.addEvent(newEvent, (err, event) =>{
        if(err) {
            res.json({success: false, msg: 'Failed to schedule event'});
        } else {
            res.json({success: true, msg: 'event scheduled'});
        }
    });
});




module.exports = router;
