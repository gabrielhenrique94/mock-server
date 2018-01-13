const express = require('express');
const router = express.Router();

module.exports = (app) => {
	router.use('/dashboard', require('./dashboard_controller'));
	app.use(router);
};
