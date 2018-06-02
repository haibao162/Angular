var q=require('q');
console.log(q);

function getPromise(){
	var defered = q.defer();
	var data = 111;
	defered.resolve(data);

    return defered.promise;
}

getPromise().then(function(d){
	console.log(d);
});