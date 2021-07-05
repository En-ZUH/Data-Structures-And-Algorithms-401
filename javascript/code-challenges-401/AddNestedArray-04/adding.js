'use strict';
let adding = (array) => {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[i][j];
    }
    newArr.push(sum);
  }
  console.log(newArr);
}
let array1 = [[5, 5, 5], [1, 7, 1], [2, 2, 2]];
adding(array1);
