const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const connectDB = require('./config/db');
const envs = require('envs');
require('dotenv').load();


const config = require('./config/config')

const app = express();

connectDB();

const port = process.env.PORT;



mongoose.Promise = global.Promise;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);


app.use((req, res, next) => {
  res.send('Welcome to Express!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
