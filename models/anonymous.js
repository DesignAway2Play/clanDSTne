var mongoose = require('mongoose');


var anonCommSchema = new mongoose.Schema({
    commContent: String,
    anonUser: String,
    listId: String,
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Anonymous', anonCommSchema);