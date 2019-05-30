var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var listSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
}, {
  timestamps: true
});

// 

var comSchema = new mongoose.Schema({
    commContent: String,
  }, {
    timestamps: true
  });

var professionalSchema = new mongoose.Schema({
  name: String,
  email: String,
  profession: String,
  list: [listSchema],
  c: [comSchema],
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Professional', professionalSchema);