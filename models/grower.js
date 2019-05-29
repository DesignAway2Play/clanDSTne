var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var listSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var growerSchema = new mongoose.Schema({
  name: String,
  email: String,
  listing: [listSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Grower', growerSchema);