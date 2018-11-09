
var arr1 = [3,6,3,9,3,7,4];

var myMap = function(arr, callback, thisArg) {
	var results = [];
	for(var i = 0; i < arr.length; i++) {
		results.push(callback.call(thisArg, arr[i], i, arr));
	}
	return results;
}


var a = myMap(arr1, Math.pow);
console.log(a);
