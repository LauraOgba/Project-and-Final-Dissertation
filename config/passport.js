
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const Event = require('../models/events');
const config = require('../config/database');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) =>{
        console.log(jwt_payload);
        User.getUserById(jwt_payload.data._id, (err, user) =>{
            if(err){
                return done(err, false);

            }
            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));

    module.exports = function(passport) {
        let opts = {};
        console.log(jwt_payload);
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
            console.log(jwt_payload);
            Event.getEventById()(jwt_payload.data._id, (err, event) => {
                if (err) {
                    return done(err, false);

                }
                if (event) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }));
    }
}