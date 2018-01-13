const express = require('express');
const router = express.Router({mergeParams: true});
const repository = require('./dashboard_repository');

router.get('/', async(req,res) => {
	let requests = [];
	try{
		requests = await repository.findAll();
	}catch(err){
		console.log(err);
	}
	var data = {
		request_list: requests
	}
	res.render('request-list.pug', data);
});

module.exports = router;