'use strict';

let array = [1, 2, 3, 4];
let newArr = [];
function reverseArray(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	console.log(newArr);
}

reverseArray(array);