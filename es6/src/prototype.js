function test(){
	this.name = '11';

}
test.prototype.foo = function(){
	console.log('ddd');
};

test.prototype.goo = 'go';
var t = new test();
t.foo();
console.log(t.goo);
console.log(t.name);

var t1 = new test();
t1.foo();
console.log(t1.goo);