function f() { console.log('I am outside!'); }

(function () {
  { // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }
  f();//inside
}());

f();//outside