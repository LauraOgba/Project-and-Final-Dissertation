const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const EventSchema = mongoose.Schema({
    title: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
});

const Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getEventById = function(id, callback){
    Event.findById(id, callback);
}

module.exports.getEventByTitle = function(title, callback){
    const query = {title: title}
    Event.findOne(query, callback);
}

module.exports.addEvent = function(newEvent, callback){


            newEvent.save(callback);
}

