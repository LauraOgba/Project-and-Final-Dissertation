const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const EventSchema = mongoose.Schema({
    id: {
        type: String,
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    text:{
        type: String
    }
});

const Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getEventById = function(id, callback){
    Event.findById(id, callback);
}

module.exports.getEventById = function(id, callback){
    const query = {id: id}
    Event.findOne(query, callback);
}

module.exports.addEvent = function(newEvent, callback){


            newEvent.save(callback);
}

