var async = require('async');
var fs = require('fs');
// async.waterfall([
// 	function(callback){
// 		console.log('1');
// 		callback(null,'one');
// 	},
// 	function(arg1,callback){
// 		callback(null,'2');
// 	}
// 	],function(err,result){
// 		console.log(err);
// 		console.log(result);
// 	});
async.waterfall([
	function(callback){
		fs.readFile('../.babelrc',function(err,result){
			//console.log(result.toString());
			var data = result.toString();
			callback(null,'one');
		});
	},
	function(arg1,callback){
		//console.log(data);
		callback(null,'2');
	}
	],function(err,result){
		//console.log(err);//null
		console.log(result);
	});

//闭包,一个函数调用另一个函数属性
function Test(){
	var data = 'bibao';
	this.inc = function (){
		this.data = data;
		console.log(this);
		return this.data;
	}
}

var test = new Test();
console.log('test data :' + test.data);//undefined
console.log(test.inc());

async.race([
	function(callback){
		fs.readFile('test1.txt',function(err,result){
			callback(null,result.toString());
		});
	},
	function(callback){
		fs.readFile('test2.txt',function(err,result){
			callback(null,result.toString());
		});
	}
	],function(err,result){
		console.log(result);
	});

async.parallel([
	function(callback){
		fs.readFile('test1.txt',function(err,result){
			var data = '1:' + result.toString();
			console.log(data);
			callback(null,data);
		});
	},
	function(callback){
		fs.readFile('test2.txt',function(err,result){
			var data = '2:' + result.toString();
			console.log(data);
			callback(null,data);
		});
	}
	],function(err,results){
		console.log(results);
});