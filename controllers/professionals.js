const Professional = require('../models/professional');

module.exports = {
    index,
    op,
    show,
    showMine,
    aList,
    dList,
    eList,
    uList

  };

  function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Professional.find(modelQuery)
    .sort(sortKey).exec(function(err, professionals) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('professionals/index', {
        professionals,
        professional: req.user,
        name: req.user.name,
        email: req.user.email,
        listings: req.user.list,
        sortKey
      });
    });
  }

  function op(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Professional.find(modelQuery)
    .sort(sortKey).exec(function(err, professionals) {
      if (err) return next(err);
      res.render('professionals/new', {
        professionals,
        professional: req.user,
        name: req.user.name,
        email: req.user.email,
        sortKey
      });
    });
  }


  //index usually is the main one.
  function show ( req, res ) {
    Professional.find({}, function ( err, listsM) {
      res.render( 'lists/index', {
        title: 'A list of listing',
        listings: listsM
      });
    });
  };

  function showMine ( req, res ) {

    Professional.find(req.user.list, function ( err, listsM) {
      res.render( 'professionals/index', {
        title: 'A list of listing',
        listing: listsM
      });
    });
  };

  function aList(req, res, next) {
    req.user.list.push(req.body);
    req.user.save(function(err) {
      res.redirect('professionals/lists');
    });
  }

  function dList(req, res, next) {
    console.log("in the Dsssssss")
    Professional.findOne({'list._id': req.params.id}, function(err, professional) {
      professional.list.id(req.params.id).remove();
      professional.save(function(err) {
        res.redirect('professionals/index');
      });
     });
  }
  
  function uList(req, res, next) {
    Professional.findOne({'list._id': req.params.id}, function(err, professional) {
      professional.list.id(req.params.id).update(req.body);
      professionl.save(function(err) {
        res.redirect('professionals/index');
      });
     }); 
  }

  function eList(req, res, next) {
    Professional.findOne({'list._id': req.params.id}, function(err, professional) {
        res.render('professionals/edit', {
          title: professional.list.title,
          content: professional.list.content,
          id: professional.list._id
        });
     });
  }