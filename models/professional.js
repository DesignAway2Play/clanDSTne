var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var listSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var postSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var professionalSchema = new mongoose.Schema({
  name: String,
  email: String,
  profession: String,
  listing: [listSchema],
  posts: [postSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Professional', professionalSchema);