const db = require('../models');

module.exports.findAll = () => {
	return db.request.findAll();
}