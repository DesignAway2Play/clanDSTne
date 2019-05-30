const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res) {
    res.render('anon/index');
  });
  
  
  router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  router.get('/index', function(req, res){
    res.render('index');
  });


  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/index');
  });

  module.exports = router;