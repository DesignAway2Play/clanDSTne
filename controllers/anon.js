module.exports = {
    enterView,
  };

function enterView(req, res, next) {
    var anonShow = req.body
    res.render('anon/index', {
        anonShow
    });
}
