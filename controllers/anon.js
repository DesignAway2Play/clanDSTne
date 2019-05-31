const Professional = require('../models/professional');
const Anonymous = require('../models/anonymous')

module.exports = {
    enterView,
    anonComm

  };
  
  
function enterView(req, res, next) {
    var anonShow = req.body
    res.render('anon/index', {
        anonShow, user: Professional.googleId
    });
}



function anonComm(req, res, next) {
  let commentObj = {"anonUser": req.body.anonUser,
    "commContent": req.body.commContent, 
    "listId": req.params.id };
  var comment = new Anonymous(commentObj);
  // let listId = req.params.id;
  // let cName = req.body.anonUser;
  // let commentContent = req.body.commContent;
  Anonymous.save(function(err) {
    if (err) return res.redirect('/lists');
    res.redirect('/lists');
  });
}
/*

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
      res.render('anon/index', {
        professionals,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }
  */