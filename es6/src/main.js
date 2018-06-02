let a = 10;
console.log(a);
//var a = 20; err
for(var i = 0;i < 5;i++){
	var i = 20;
	console.log(i);//20,once
}

for(let i = 0;i < 3;i++){
	//i = 3; //3
	let i = 3;
	console.log(i);//3,3,3
}

var tmp = 123;
{
	tmp = 'abc';//err
	//let tmp;
}
console.log(tmp);
console.log(typeof arr);//undefined

function bar(x = 2,y = x){
	return [x,y];
}
console.log(bar());
console.log(bar(3,4));

var x = x;
console.log('x = x :' + x);//undefined
//报错
// function func() {
//   let a = 10;
//   var a = 1;
// }

// // 报错
// function func() {
//   let a = 10;
//   let a = 1;
// }

// function func(arg) {
//   let arg; // 报错
// }

function func(arg) {
  {
    let arg; // 不报错
    console.log('argument :' + arg);
  }
}
func('argument');//undefined

var tmp = new Date();
function f() {
  console.log(tmp);
   {
    var tmp = 'hello world';
  }
}

f(); // undefined
console.log(tmp);

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i); // 5
//ES5 只有两种声明变量的方法：var命令和function命令。
//ES6 除了添加let和const命令，后面章节还会提到,
//另外两种声明变量的方法：import命令和class命令。
//所以，ES6 一共有 6 种声明变量的方法。
c = 1;
this.c = 2;
console.log('----global----');
console.log(global.c);//1
console.log(this.c);//2

function test(){
  var useVar = 'useVar';//局部
  notVar = 'notVar';//全局
  aa = bb = 4;
}
test();
//console.log(useVar);
console.log(notVar);
console.log(aa + ',' + bb); 
var aa = bb = 3;
console.log(aa + ',' + bb); 
console.log('1' == 1);
console.log('1' === 1);
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(null) == typeof(undefined));