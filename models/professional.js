var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var listSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
}, {
  timestamps: true
});

// 

var comSchema = new mongoose.Schema({
    commContent: String,
    listId: String,
    op: String,
  }, {
    timestamps: true
  });

var professionalSchema = new mongoose.Schema({
  name: String,
  email: String,
  profession: String,
  list: [listSchema],
  comments: [comSchema],
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Professional', professionalSchema);
// module.exports = mongoose.model('CommentPro', comSchema);