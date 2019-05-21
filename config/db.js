const mongoose = require('mongoose');
const config = require('./config.js');




const connectDB = async () => {
  try {
    await mongoose.connect(global.gConfig.DB, {
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
