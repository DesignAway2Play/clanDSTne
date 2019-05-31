const express = require('express');
const router = express.Router();
const passport = require('passport');
const professionalsCtrl = require('../controllers/professionals');
const anonCtrl = require('../controllers/anon');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/professionals',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/professionals', professionalsCtrl.index);

router.get('/new', professionalsCtrl.op);
router.get('/lists', professionalsCtrl.show)


router.post('/anon/index', anonCtrl.enterView);
router.post('/lists', professionalsCtrl.aList);
router.post('/lists/:id/comments/new', anonCtrl.anonComm);
router.delete('/:id', professionalsCtrl.dList)



module.exports = router;

/*
router.post('/anon/index', function(req, res) {
  res.render('anon/index');
})
/*




router.get('/professionals', professionalsCtrl.index);




router.get('/', function(req, res) {
  res.redirect('/professionals');
});
*/

