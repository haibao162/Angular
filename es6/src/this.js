function a(){
	var  user = 'haibao';
	console.log(this);
}
a();//window

var o = {
	user : 'bee',
	fn:function(){
		this.ani = 'gre';
		console.log(this.user);//bee
		console.log(this);//o
	}
};
o.fn();//bee,o
console.log(o.ani);//gre

function go(){
	this.name = 'fer';
	this.fn = function(){
		this.pwd = '***';
		console.log(this);
	}
	
}
var g = new go();
g.fn();//go
console.log(g.pwd);//***

//4.apply,改变this指向
 var Pet = {
        words : '...',
        speak : function (say) {
            console.log(say + ''+ this.words)
        }
    }
    Pet.speak('Speak'); // 结果：Speak...

    var Dog = {
        words:'Wang'
    }

    //将this的指向改变成了Dog
    Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang

  var o = {
    user:'window.o.fn',
    fn:function(){
        console.log(this.user); 
        console.log(this);//o
    }
}
window.o.fn();// o

var o = {
    ap:10,
    b:{
        ap:12,
        fn:function(){
            console.log(this.ap); //12
        }
    }
}
o.b.fn();// b,console 12
var j = o.b.fn;
j();//undefined
//https://www.cnblogs.com/pssp/p/5216085.html