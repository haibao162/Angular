function a(){
	console.log(this);
}

function Animal(attr){
	this.attr = attr || 'Animal';
	this.sleep =function(){
		console.log(this.attr+' is sleeping');
	}
}

new Animal().sleep();//Animal is sleeping

Animal.prototype.eat = function(food){
	console.log(this.attr+' is eating '+food);
}

new Animal('dog').eat('bone');

function Cat(){

}
Cat.prototype = new Animal();
Cat.prototype.name = new String('cat');
var cat = new Cat();
console.log(cat.attr);
console.log(cat.name.toString());
cat.eat('fish');
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

