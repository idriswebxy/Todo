const mongoose = require('mongoose');
const config = require('./config.js');
const conf = require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(conf.process.env.MONGODB, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log('MongoDB Connnected!')

  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB;
