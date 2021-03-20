const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BirthdaySchema = new Schema({
  name: String,
  imageUrl: String,
  age: Number,
  _id: String,
});

module.exports = mongoose.model('Birthday', BirthdaySchema);
