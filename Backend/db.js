const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/authentication'; 
// vvR8ylk3ehF0eO9w
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
