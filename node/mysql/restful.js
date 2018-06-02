var express=require('express');
var app=express();
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123789',
  database : 'haibao'
});

var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'haibao162',
  password : '123789',
  database : 'haibao'
});

connection.connect();
var sql='select * from raspberry';
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
console.log(result);
});
connection.end();


function test(sql,params){
	pool.getConnection(function(err,connection){
    connection.query(sql,params,function (err, result){
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log(result);
});
  });
}
var string = 'select * from raspberry where id in(?,?)';
test(string,[1,3]);
