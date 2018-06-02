function Cat(){

}

function Animal(){
	this.name = 'Animal';
}

Animal.prototype.apple = 'apple';
Cat.prototype = new Animal();
//Cat.prototype.name = 'cat name';//覆盖Animal
Cat.prototype.dog = 'dog';
var cat = new Cat();
console.log(cat.__proto__);//Animal {name: "Animal", dog: "dog"}
console.log(cat.name,cat.hasOwnProperty('name'));//false
console.log(cat.apple,cat.hasOwnProperty('apple'));//false
console.log(cat.dog,cat.hasOwnProperty('dog'));
