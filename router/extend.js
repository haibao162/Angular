function Father(){
this.name = "haibao";	
this.value = 10000;
this.getName = function(){return this.name;};

}
Father.prototype.getValue = function(){
	return this.value;
};
Father.prototype.son = new Son();
Father.prototype.daughther = new Daughther();
function Son(){
this.age = 24;

};

function Daughther(){
	this.age = 333;
	this.dau = 'i am daughther';
}

var fa = new Father();
var fa2 = new Father();
console.log(fa.getName());
console.log(fa.name);
console.log(fa.getValue());
console.log(fa.son.age);
console.log(fa.daughther.dau + fa.daughther.age);
console.log(fa == fa2);//false
fa2.value = 200000;
console.log(fa.value);
//1、原型链继承
function Animal(name){
	this.name = name || 'Animal';
	this.value = 'value';
	this.sleep = function(){
		console.log('sleeping');
	}
}
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

function Cat(){
}
Cat.prototype = new Animal('params');//params
Cat.prototype.name = 'cat';//cat

var cat = new Cat();
var cat2 = new Cat();
console.log('----cat----');
console.log(cat.name);
cat.sleep();
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true
cat.name = 'update name';
console.log(cat2.name);
cat.eat = function(){
	console.log('update 引用');
};
cat2.eat();

//2.构造继承
function Constr(name){
	Animal.call(this);
  	this.name = name || 'Tom';
}
var con = new Constr();
console.log('----constr----');
console.log(con.name);
con.sleep();
//con.eat();
//只能继承父类的实例属性和方法，不能继承原型属性/方法
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

//3.实例继承
function Instance(name){
	this.str = 'str';
	var st = new Animal();
	st.name = name || 'Tom';
	return st;
}

var instance = new Instance();
console.log('----instance----');
console.log(instance.name + instance.str);//Tomundefined
instance.sleep();//sleeping
instance.eat();//Tom正在吃：undefined
console.log(instance instanceof Animal); // true
console.log(instance instanceof Cat); // false

//5.组合继承
function Concat(name){
   Animal.call(this);
   this.name = name || 'Concat';
}

Concat.prototype = new Animal();
var concat = new Concat();
console.log('----concat----');
console.log(concat.name);
concat.sleep();
concat.eat('Apple');

//https://www.cnblogs.com/humin/p/4556820.html


