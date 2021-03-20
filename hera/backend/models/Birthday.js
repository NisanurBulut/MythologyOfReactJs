const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BirthdaySchema = new Schema({
  name: String,
  imageUrl: String,
  age: Number,
});

module.exports = mongoose.model('Birthday', BirthdaySchema);
