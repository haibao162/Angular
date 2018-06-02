//(function(){console.log(22);})();    
function call(a,b,callback){
	callback(a,b);
};  
call(1,2,function(a,b){console.log(a+','+b);});