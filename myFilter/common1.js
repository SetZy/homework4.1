
var arr1 = [1,3,5,6,9,3,6];

var myFilter = function(arr, callback, thisArg) {
	var results = [];
	for (var i = 0; i < arr.length; i++){
		if(callback.call(thisArg, arr[i], i, arr) === true) {
			results.push(arr[i]);
		}
	}
	return results;
} 

var data = myFilter(arr1, function(num){
	return num > 4;
})
console.log(data);