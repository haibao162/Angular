var express=require('express');
var app=express();
var router=require('./index');
var haibao={"name":"jaxin","age":"25","salary":10000};
app.set('env',haibao);
console.log(app.get('env'));
var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
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
app.set('raspberry',result);
app.use('/respon',router);
});
connection.end();
app.listen(3000);
