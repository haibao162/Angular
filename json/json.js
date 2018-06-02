var k={};
k["1"]="hahaha";
console.log(k);
console.log(k["1"]);

var benches=[
		{"id":2,ById:{location:"1F",publicIPAddress:"127.0.0.1"}},
		{"id":3,ById:{location:"2F",publicIPAddress:"127.0.0.2"}},
		{"id":4,ById:{location:"3F",publicIPAddress:"132.22.1.1"}}
];               

console.log(benches[1].ById.publicIPAddress);


var obj = { foo: "bar", baz: 42 };
var keys = Object.keys(obj);
// CCAC: Chrome Console Auto Copy
console.log(keys);//['foo','baz']
console.log(obj[keys[1]]);


console.log('a\n'+'111');
