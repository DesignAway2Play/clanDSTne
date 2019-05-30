var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var Grower = require('../models/grower');
var Professional = require('../models/professional');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Professional.findOne({ 'googleId': profile.id }, function(err, professional) {
      if (err) return cb(err);
      if (professional) {
        return cb(null, professional);
      } else {

        var newProfessional = new Professional ({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newProfessional.save(function(err) {
          if (err) return cb(err);
          return cb(null, newProfessional);
        });
      }
    });
  },
  ));

  passport.serializeUser(function(professional, done) {
    done(null, professional.id);
});

passport.deserializeUser(function(id, done) {
    Professional.findById(id, function(err, professional) {
      done(err, professional);
    });
});


  /*
  function(accessToken, refreshToken, profile, cb) {
    Grower.findOne({ 'googleId': profile.id }, function(err, grower) {
      if (err) return cb(err);
      if (grower) {
        return cb(null, grower);
      } else {
        // we have a new student via OAuth!
        var newGrower = new Grower ({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newGrower.save(function(err) {
          if (err) return cb(err);
          return cb(null, newGrower);
        });
      }
    });
  }
  */
 
/*
  passport.serializeUser(function(grower, done) {
    done(null, grower.id);
});

passport.deserializeUser(function(id, done) {
    Grower.findById(id, function(err, grower) {
      done(err, grower);
    });
  });

*/
passport.serializeUser(function(professional, done) {
    done(null, professional.id);
});

passport.deserializeUser(function(id, done) {
    Professional.findById(id, function(err, professional) {
      done(err, professional);
    });
});
