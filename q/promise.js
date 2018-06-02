var Q = require('q');
var fs = require('fs');
function getQ(){
var deferred = Q.defer();
fs.readFile('test3.txt',function(err,result){
		if(err){
			deferred.resolve(err);
		}
		deferred.resolve(result.toString());
	});
return deferred.promise;
}

getQ().then(function(data){
	console.log(data);
}).then(function(){
fs.readFile('test1.txt',function(err,result2){
		console.log(result2.toString());
	});
}).then(function(){
	fs.readFile('test2.txt',function(err,result3){
		console.log(result3.toString());
	});
});

function getArray(){
var deferred = Q.defer();
fs.readFile('test3.txt',function(err,result){
		console.log(result.toString());
		deferred.resolve();
	});

return deferred.promise;
}

getArray().then(function(data){

	console.log(data);
	console.log(111111);
	//undefined
});

// setTimeout(function(){
//     console.log(4);
// },0);

// new Promise(function first(resolve){
// 	console.log(1);
// 	resolve();
// }).then(function second(){
//     console.log(3);
// });

//     console.log(2);

// var data = 100;
// new Promise(function first(resolve,reject){
// 	console.log(data);
// 	data+=200;
// 	resolve(data);
// }).then(function second(){
//     console.log(data);
//     data+=300;
// }).then(function third(){
// 	console.log(data);
// });
var fs = require('fs');

var str = '';
var promise = new Promise(function(resolve,reject){
	fs.readFile('test1.txt',function(err,result){
		if(err){
			resolve(err);
		}
		resolve(result.toString());
	});
});

//error
// promise.then(function(data){
// 	console.log('41 row:'+data);
// 	str += data;
// }).then(function(){
// 	fs.readFile('test2.txt',function(err,result){
//     str += result.toString();
//     console.log('46 row:'+str);
// 	});
// 	//console.log('48 row:'+str); 
// }).then(function(){
// 	//console.log('50 row:'+str);
// 	fs.readFile('test3.txt',function(err,result){
//     str += result.toString();
//     console.log('53 row:'+str);
// 	});
// 	//console.log('55 row:'+str);
// });

// var promise = new Promise(function(resolve, reject) {
//  if (/* 异步操作成功 */){
//  resolve(value);
//  } else {
//  reject(error);
//  }
// });

// promise.then(function(value) {
//  // success
// }, function(value) {
//  // failure
// });
// http://www.jianshu.com/p/063f7e490e9a



// upload files: https://cnodejs.org/topic/5a03c3d384ed7ceb219ea836