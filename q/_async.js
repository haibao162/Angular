var async = require('async'); 
var fs = require('fs');
//console.log(async);
var data = '';
async.waterfall([
    function(callback) {
      fs.readFile('mysql.js',function(err,result){
    //console.log('test1.txt:'+result);
      data += result.toString();
      callback();
	});
         
    }, function(callback) {
        fs.readFile('test1.txt',function(err,result){
      data += result.toString();
      callback();
    });

    }, function(callback) {
      fs.readFile('test2.txt',function(err,result){
      data += result.toString();
      callback();
	});
       
        
    }], function(err) {
      console.log(1111111111111);
      fs.readFile('test3.txt',function(err,result){
      data += result.toString();
      console.log(data);


	});
    });


//var userId = req.body.userId;
// if(!fs.existsSync('./uploads/'+userId+'o')){
// fs.mkdirSync('./uploads/'+userId);
// }
