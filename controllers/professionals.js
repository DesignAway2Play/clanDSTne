const Professional = require('../models/professional');
const Anonymous = require('../models/anonymous')
// const CommentPro = require('../models/professional');


module.exports = {
    index,
    op,
    show,
    showMine,
    aList,
    dList,
    eList,
    uList,
    profComm

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


  function show ( req, res ) {
    Anonymous.find({}, function ( err, comments) {
    Professional.find({}, function ( err, listsM) {
      res.render( 'professionals/lists', {
        people: listsM,
        proComs: listsM.comments,
        allComms: comments
      });
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
      res.redirect('professionals/index');
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
  let listItem = req.user.list.id(req.params.id);
  listItem.title = req.body.title;
  listItem.content = req.body.content;
  req.user.save(function(err) {
    res.redirect('/professionals/index');
  });
}

function eList(req, res, next) {
  console.log(req.user);
  let list;
  
  req.user.list.forEach( function(listItem) {
    if (listItem.id === req.params.id) {
      console.log(listItem);
      list = listItem;
    }
  });
  res.render('professionals/edit', {
    list,
    professional: req.user
  });
}

function profComm(req, res, next) {
  let commentObj = {"op": req.body.op,
    "commContent": req.body.commContent, 
    "listId": req.params.id };
  //   console.log(commentObj)
  // var comment = new CommentPro(commentObj);
    // console.log(Professional.comments);
  // let listId = req.params.id;
  // let op = req.body.op;
  // let commContent = req.body.commContent;
  Professional.findOne({'_id': req.body.userId}, function(err, professional){
    professional.comments.push(commentObj);
    professional.save(function(err) {
      if (err) return res.redirect('/lists');
      res.redirect('/professionals/lists');
  });
});
}

