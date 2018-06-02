for(let i = 0; i < 10;i++){
	let j = 11;
	var k = 12;
}
console.log(k);
//console.log(i);error
//console.log(j);error
{
	let a = 'i am a';
	var b = 'i am b';
}
console.log(b);
//ES5 只有全局作用域和函数作用域，没有块级作用域
//变量提升
//console.log(a);
//var a;
//不能重复声明
// 报错
// function func() {
//   let a = 10;
//   var a = 1;
// }

// 报错
// function func() {
//   let a = 10;
//   let a = 1;
// }
function func(){
	var b = 0;
	this.a = '55';
	//console.log(this);
}
//console.log(a);
console.log(this.a);
func();
console.log(this.a);
var f = new func();
console.log(f.a);

console.log('--块级作用域--');

let ins = 10;
var stu = 20;
let gts = 50;
let ms = ['we'];
	{
		let ins = 30;
		var stu = 40;
		gts = 60;
		ms.push('er');
	}
console.log(ins);//10
console.log(stu);//40
console.log(gts);//60
console.log(ms);//['we','er']



