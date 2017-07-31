var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect('mongodb://127.0.0.1/fileDatabase');

module.exports = {
  mongoose
};
