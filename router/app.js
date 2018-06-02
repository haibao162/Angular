var express=require('express');
var app=express();
var getList=require('./getList');
app.use('/List',getList);
app.listen(5000);
module.exports=app;