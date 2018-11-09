
var arr1 = [1,3,5,6,9,3,6];

var myForEach = function(arr, callback, thisArg) {
	for (var i = 0; i < arr.length; i++){
		callback.call(thisArg, arr[i], i, arr);
	}
} 

myForEach(arr1,function(num, i, nums){
	console.log('Number:' + num + ', index ' + i + ',', nums )
});