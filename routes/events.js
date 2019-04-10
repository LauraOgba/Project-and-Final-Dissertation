const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Event = require('../models/events');


//Register
router.post('/calendar', (req, res, next) =>{
    let newEvent = new Event({
        id: req.body.id,
        start_date:req.body.start_date,
        end_date: req.body.end,
        text:req.body.end
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
