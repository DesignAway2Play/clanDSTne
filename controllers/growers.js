const Grower = require('../models/grower');

module.exports = {
    index,
  };

  function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Grower.find(modelQuery)
    .sort(sortKey).exec(function(err, growers) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('growers/index', {
        professionals,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }