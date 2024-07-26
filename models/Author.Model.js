const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nation: String,
  type: String,
  status: { type: Number, default: 0, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  description: String,
  birthDate: Date,
});

module.exports = mongoose.model('Author', authorSchema)