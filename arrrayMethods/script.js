"use strict";

//SIMPLE ARRAY METHODS
//slice
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice());
// console.log({ ...arr });

//splice
//console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

//reverse
let arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log("arr", arr);
console.log("arr2", arr2);
console.log(...arr, ...arr2);
console.log("arr", arr);
console.log("arr2", arr2);

//join
console.log(letters.join(" - "));
