var async = require('async'); 
var fs = require('fs');
//console.log(async);
async.waterfall([
    function(callback) {
      fs.readFile('test1.txt',function(err,result){
    console.log('test1.txt:'+result);
	});
        callback();
        
    }, function(callback) {
        callback();
        
    }, function(callback) {
        fs.readFile('test2.txt',function(err,result){
    console.log('test2.txt:'+result);
	});
       callback();
        
    }], function(err) {
        fs.readFile('test3.txt',function(err,result){
    console.log('test3.txt:'+result);
	});
    });

async.waterfall([  
    function(callback){  
        callback(null, 'one', 'two');  
        console.log('1');  //1
    },  
    function(arg1, arg2, callback){  
        callback(null, 'three');  
        console.log(arg1);  //one
        console.log(arg2);  //two
    },  
    function(arg1, callback){    
        callback(null, 'done');  //done
        console.log(arg1);  //three
    }  
], function (err, result) {  
    console.log(result);  
}); 

async.waterfall([
	function(callback){
		var data =[1,11];
		callback(null,data);   //no print
	},function(arg1,callback){     //Error:function(callback){} ,function(callback,arg1){}
		//console.log(arg1);
		arg1.push(111);
	    callback(null,arg1);	
	}
],function(err,result){
console.log(result); //111
});

//parallel
async.parallel([
	function(callback){
		callback();
	},function(callback){
        callback(null,'two');
	},function(callback){
	    callback(null,'three');
	}
	],function(err,result){
		callback(1,2);       //I am callback
		console.log(result); //[ undefined, 'two', 'three' ]
			
		
	});

function callback(){
	console.log('I am callback');
}

//callback(1,2,3,4); // true