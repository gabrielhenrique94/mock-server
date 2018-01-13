const express = require('express');
const router = express.Router();

module.exports = (app) => {
    require('./mock_controller')(app);
};
