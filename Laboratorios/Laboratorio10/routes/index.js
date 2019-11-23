var express = require('express');
var router = express.Router();
var Register = require('../models/Register');

router.get('/register', function(req, res, next) {
	console.log(req);
	Register.find((error, registers) => {
		if (error) return response.status(500).json({ message: 'System error.'});
    
    if (registers) {
			response.status(200).json(registers);
		} else {
			response.status(404).json({ message: "No records."});
		}
	});
});

module.exports = router;
