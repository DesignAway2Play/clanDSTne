const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/anon', function(req, res) {
    res.render('/anon/index');
  });
  