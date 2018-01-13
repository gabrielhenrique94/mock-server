"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

require('./server/mocked')(app);
require('./server/dashboard')(app);
module.exports = app;