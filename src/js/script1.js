var express = require('express');
var app=express();
var array1=[2323,33,22];
array2=[];
for(var i=0;i<array1.length;i++){

	array2.push(array1[i]);
}
console.log(array2);

app.get('/',function(req,res){
res.send("hello");
});
app.listen(6000);
module.exports=app;