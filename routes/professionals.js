const router = require('express').Router();
const express = require('express');
const professionalsCtrl = require('../controllers/professionals');

// GET /students
router.get('/professionals', professionalsCtrl.index);



// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts

// router.post('/facts', isLoggedIn, ProfessionalsCtrl.addFact);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;