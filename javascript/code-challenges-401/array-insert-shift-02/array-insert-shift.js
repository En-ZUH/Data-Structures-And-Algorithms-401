'use strict';
let array = [1, 2, 3, 4, 5, 6, 7];
function insertShiftArray(arr, number) {
    let newArr = [];
    let midIndex = Number.parseInt(array.length / 2);
    for (let i = 0; i <= arr.length; i++) {
        if (i == midIndex) {
            newArr.push(number);
            newArr.push(arr[i]);
        }
        else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
insertShiftArray(array, 10);
