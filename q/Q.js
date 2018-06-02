// var Q=require('q');
// console.log(Q);

console.log(undefined==null);
console.log([1]==[1]); //false
var set=new Set(["window",1,2,3,4,4,5,5,6]);
console.log(set);

for (var item of set.keys()) {
  console.log(item);
}
for (var item of set.values()) {
  console.log(item);
}


var map=new Map();
map.a="content";
map.set("b","value");
console.log(map);
console.log(map.a);
console.log(map.get('b'));

var users = [
  {name: "张含韵", "email": "zhang@email.com"},
  {name: "江一燕",   "email": "jiang@email.com"},
  {name: "李小璐",  "email": "li@email.com"}
];

var emails = users.map(function (user) { return user.email; });

console.log(emails.join(","));

var array=[33,23,12,43,76,53,55];
//array.forEach(console.log);

array.forEach(function(value,index,array){
console.log(value);
});

console.log(users[0].age==undefined);


//http://blog.csdn.net/ii1245712564/article/details/51419533
//https://cnodejs.org/topic/560dbc826a1ed28204a1e7de      promise
//http://blog.csdn.net/boyzhoulin/article/details/40592837 