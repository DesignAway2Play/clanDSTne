const express = require('express');
const router = express.Router();
const passport = require('passport');
const professionalsCtrl = require('../controllers/professionals');


router.get('/', function(req, res) {
  res.render('index');
});

/*
router.get('/professionals', professionalsCtrl.index);



router.get('/', function(req, res) {
  res.redirect('/professionals');
});
*/

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/professionals',
    failureRedirect : '/professionals'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/professionals');
});

module.exports = router;

