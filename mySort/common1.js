var arr = ['fgd','dgtr',12,'jkh','adf','bgj','sdt',14,6,13,5,132];
//var arr = [43,-3, 10, 100];
console.log(arr);

function sortArr(a,b){
	if(a < b)
		return -1; 
	if(a > b)
		return 1;
	if(a==b)
		return 0 ;
}

Array.prototype.mySort = function() {
	for(j=0; j<this.length; j++){      //change elements array to type string
		this[j] = String(this[j]);
	}
	for(k=0; k < this.length; k++){		//do sort array from min to max
		for(i=0; i<this.length-1;i++){
			if(this[i]>this[i+1]){
				var a = this[i];
				this[i] = this[i+1];
				this[i+1] = a;
			}
		}
	}
	for(h=0; h<this.length;h++){		//elements who is number in array change type from string to number
		if(this[h].match(/^[0-9]+$/)){
			this[h] = parseInt(this[h]);
		}
	}
	return this;
}

console.log(arr.mySort());				//check works method mySort 
console.log(arr.sort(sortArr));			//check sort elements array from min to max
