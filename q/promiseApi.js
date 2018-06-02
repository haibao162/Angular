var db = require('./mysql');

// var sql = 'select * from raspberry';
// var promise = new Promise(function(resolve,reject){
//    db.getConnection(function(err,connection){
//       connection.query(sql,[],function(err,data){
//       	connection.release();
//       	if(err){
//       		reject(err);
//       	}else {
//       		resolve(data);
//       	}
//       });
//    });
// });

// promise.then(function(data){
// 	console.log(data);
// },function(err){
// 	console.log('test error');
// 	console.log(err);
// });

function promiseApi(sql){
	return new Promise(function(resolve,reject){
   db.getConnection(function(err,connection){
      connection.query(sql,[],function(err,data){
      	connection.release();
      	if(err){
      		reject(err);
      	}else {
      		resolve(data);
      	}
      });
   });
});
}

Promise.all([
promiseApi('select * from raspberry'),
promiseApi('select * from job')
	]).then(function(response){
  console.log(response);
},function(err){
	console.log(err);
});