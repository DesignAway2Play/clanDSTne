const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/anon', function(req, res) {
    res.render('/anon/index');
  });
  
  
  router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  router.get('/anon/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/anon/index',
      failureRedirect : '/anon/index'
    }
  ));
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/anon/index');
  });

  module.exports = router;