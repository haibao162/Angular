var Q = require('q');
var fs = require('fs');
function getTest3(){
var deferred = Q.defer();
fs.readFile('test3.txt',function(err,result){
		if(err){
			deferred.resolve(err);
		}
		deferred.resolve(result.toString());
	});
return deferred.promise;
}

function getTest2(){
var deferred = Q.defer();
fs.readFile('test2.txt',function(err,result){
		if(err){
			deferred.resolve(err);
		}
		deferred.resolve(result.toString());
	});
return deferred.promise;
}

getTest3().then(function(result,err){
	console.log(result);
	// fs.readFile('test2.txt',function(err,result){
	// 	console.log(result.toString());
	// });
	return getTest2();
}).then(function(result){
	console.log(result);
	fs.readFile('test1.txt',function(err,result){
		console.log(result.toString());
	});

},function(err){});