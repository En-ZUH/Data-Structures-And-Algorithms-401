'use strict';
let midIndex;
 
function BinarySearch (arr,key){
 let lowIndex=0;
 let highIndex= arr.length-1;
 while(lowIndex<=highIndex){
  midIndex =Math.floor((lowIndex+highIndex)/2);
  if(arr[midIndex]===key)
    return midIndex;
  else if(arr[midIndex]<key)
    lowIndex=midIndex+1;   
  else{ 
    highIndex=midIndex-1;
 }}
 return -1;
}
let array=[1,2,3,5];
// BinarySearch(array, 5);
BinarySearch(array, 20);
