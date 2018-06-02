var fun=require('./func');
fun.fun1();
Array.prototype.mod= function(argument) {
	argument.push(10000);
	console.log(argument);
};
var array=[110];
var array2=[33];
console.log(array);
array2.mod(array);

console.log(Array.prototype.slice.call([1,2,3,4,5])[3]);//object  4
var str='1,2,3,4';
var ar=[1,2,3,4];
console.log(typeof(str)+','+typeof(ar));
console.log(str.slice()[2]);
console.log(typeof(ar.slice()));
