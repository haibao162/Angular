var data=[1];
new Promise(function first(resolve){
	console.log(data);
	resolve(data);
}).then(function second(data){
	data.push(2);
console.log(data);
});

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
var data=[];
data.push({"salary":2232});
console.log(data);

var map=new Map();
map.set("name",100);
console.log(map);
console.log(map.get("name"));
console.log(map.includes(100));
console.log(map.hasOwnProperty(100));