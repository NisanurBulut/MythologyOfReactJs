const { model, Schema } = require('mongoose');

const BirthdaySchema = new Schema({
  name: String,
  imageUrl: String,
  age: Number,
});

module.exports = model('Birthday', BirthdaySchema);
