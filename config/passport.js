// config/passport.js

const LocalStrategy = require('passport-local').Strategy;

const Admin = require('./database/admin-model');

module.exports = function (passport) {

    // Serializing for current session is a thing

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (user, done) {
        Admin.findByID(id, function (err, user) {
            done(err, user);
        });
    });

    // Passport-local setup
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            Admin.findOne({ 'local-email': email }, function (err, user) {
                if (err) // Catching for own error-handling will be useful here
                    return done(err);

                // IF no user found
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'Unable to log in.'));

                // IF wrong password
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Unable to log in.'));

                return done(null, user);
            });
        }));

};