const _ = require('lodash');
require('dotenv').config({ path: 'NODE_DEV' })

const config = require('./config.json');
const defaultConfig = config.developement;
const enviroment = process.env.NODE_ENV || "development";
const enviromentConfig = config[enviroment];
const finalConfig = _.merge(defaultConfig, enviromentConfig);

global.gConfig = finalConfig;

// console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
