var express = require('express');
var router = express.Router(); 
// router.get('/index', function(req, res, next)
// { res.send('hello, nodejs11'); });


router.get('/reque', function(req, res){ 
	console.log("env:"+res.json(req.app.get('raspberry'))); 
});
module.exports = router;