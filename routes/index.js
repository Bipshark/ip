var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
		agent = req.headers['user-agent'];
		
	if (agent.match(/(curl|wget)/ig)) {
		res.send(ip + "\n");

		return;
	}

 	res.render('index', { ip: ip });
});

module.exports = router;
