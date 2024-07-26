const mongoose = require('mongoose');

class Mongo {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect("mongodb://127.0.0.1:27017/be_graphql") // Add your MongoDB connection string
      // Connect to MongoDB
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);
      });
  }
}

module.exports = new Mongo()