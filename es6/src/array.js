let arr;
test = '33333333';
{
	let arr = 'eeee';
}
console.log(arr);//undefined
function mod(){
	arr = '111';
	console.log(arr);
}

function del(){
	let arr = '2222';
	console.log(arr);
}
mod();
console.log(arr);//111

module.exports = {
	mod : mod,
	del : del
}