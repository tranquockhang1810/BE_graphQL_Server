const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  type: String,
  status: { type: Number, default: 0, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  pages: Number,
  publisher: String,
  description: String,
});

module.exports = mongoose.model('Book', bookSchema);