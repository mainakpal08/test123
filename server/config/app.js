'use strict';

const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const CONFIGURATION = {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_LOGIN: process.env.SMTP_LOGIN,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  DB_URI: process.env.DB_URI,
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3302
};

mongoose.Promise = global.Promise;
mongoose.connection.openUri(process.env.DB_URI || "mongodb://admin1:admin123@cluster0-shard-00-00-jou1m.mongodb.net:27017,cluster0-shard-00-01-jou1m.mongodb.net:27017,cluster0-shard-00-02-jou1m.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {config: {autoIndex: false}});
mongoose.connection.on('error', function(err) {
  console.log('MongoDB Connection Error');
  process.exit(-1);
});

/*let mailTransporter = nodemailer.createTransport({
  host: CONFIGURATION.SMTP_HOST,
  secure: true,
  auth: {
    user: CONFIGURATION.SMTP_LOGIN,
    pass: CONFIGURATION.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});*/

module.exports = {CONFIGURATION};
