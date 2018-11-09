var a = [1,4,7];
var b = [1,4,7];

Array.prototype.myPush = function(elem){
	this[this.length] = elem;
}

a.myPush(b);
console.log(a);
