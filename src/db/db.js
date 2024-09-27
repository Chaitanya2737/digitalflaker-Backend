const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://chaitanyasatarkar123:${process.env.DB_PASSWORD}@cluster0.5qlnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

module.exports = connectDb;
