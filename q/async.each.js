var async = require('async');
var fs = require('fs');
var arr = ['test1.txt','test2.txt','test3.txt'];
// async.each(arr,function(item,callback){
// fs.readFile(item,function(err,data){
// 	console.log(data.toString());
// 	callback();
// });
// },function(err){
// console.log(err);
// });

async.eachSeries(arr,function(item,callback){
fs.readFile(item,function(err,data){
	console.log(data.toString());
	callback();
});
},function(err){
console.log(err);
});