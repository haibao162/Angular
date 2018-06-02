var express = require('express');
var router = express.Router(); 
var config=require('./config.json');
var mysql=require('mysql');
console.log(config);
//var connection = mysql.createConnection({
  var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'haibao162',
  password : '123789',
  database : 'haibao'
});

router.use('/getRaspberryList',function(req,res){
    //connection.connect();
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   

	console.log('getRaspberryList');
	var sql='select * from raspberry';

  pool.getConnection(function(err,connection){
    connection.query(sql,function (err, result){
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
  
//res.send(result);
// console.log(result);
// console.log(req.app)
req.app.set('raspberry',result);
res.json(req.app.get('raspberry'));
connection.release();
});
  });
});

// router.use(function(req,res,next){
// console.log('ueeee');
// next();
// });
// router.use('/getList', function(req, res){
// res.send('22');
// console.log(2);
// });

module.exports = router;

