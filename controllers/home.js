/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('splash', {
    title: 'Home'
  });
};

exports.privacy = function(req, res) {
  res.render('privacy');
};

exports.about = function(req, res) {
  res.render('about');
};

exports.newabout = function(req, res) {
  res.render('newabout');
};

exports.splash = function(req, res) {
  res.render('splash');
};