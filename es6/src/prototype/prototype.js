//https://www.cnblogs.com/MuYunyun/p/5933366.html
function foo(){
	this.name = 'name';
}
foo.prototype.z = 3;
console.log(foo.prototype);
var obj = new foo();
var obj2 = new foo();
console.log(obj.__proto__ === foo.prototype);
console.log(obj.__proto__ === obj2.__proto__);
console.log(obj);
obj.y = 2;
obj.x = 1;
console.log(obj.x);
console.log(obj.z);
console.log(typeof obj.toString); // 'function'  

//我们发现typeof obj.toString是一个函数，但是不管在对象上还是对象的原型上都没有toString方法，因为在它原型链的末端null之前都有个Object.prototype方法，
//而toString正是Object.prototype上面的方法。这也解释了为什么JS基本上所有对象都有toString方法
console.log('z' in obj); // true               //obj.z是从foo.prototype继承而来的，所以'z' in obj返回了true
console.log(obj.hasOwnProperty('z')); // false   //但是obj.hasOwnProperty('z')返回了false,表示z不是obj直接对象上的，而是对象的原型链上面的属性。(hsaOwnProperty也是Object.prototype上的方法)
console.log(obj.hasOwnProperty('name'));//true
var obj2 = new foo();
console.log(obj2.hasOwnProperty('z'));//false
console.log(obj2.hasOwnProperty('name'));//true

//基于原型的继承
function Foo(){
	this.y = 2;
}

Foo.prototype.x = 1;
var obj3 = new Foo();
 //①当使用new去调用的时候，函数会作为构造器去调用
 //②this会指向一个对象(这里是obj3)，而这个对象的原型会指向构造器的prototype属性(这里是Foo.prototype)
 //可以看到y是对象上的，x是原型链上的原型（也就是Foo.prototype上）