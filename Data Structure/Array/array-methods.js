
// pop()
//Definition: Removes the last element from an array and returns that element.

const arr = [1, 2, 3, 4, 5];
const lastElement = arr.pop();
console.log(arr, lastElement); // [1, 2, 3, 4] 5

// shift()
//Definition: Removes the first element from an array and returns that element.

const arr1 = [1, 2, 3, 4, 5];
const firstElement = arr1.shift();
console.log(arr1, firstElement); // [2, 3, 4, 5] 1


// splice()
//Definition: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const arr2 = [1, 2, 3, 4, 5];
const deletedElements = arr2.splice(2, 2);
console.log(arr2, deletedElements); // [1, 2, 5] [3, 4]


// slice()
//Definition: Extracts a section of an array and returns a new array.

const arr3 = [1, 2, 3, 4, 5];
const slicedArray = arr3.slice(2, 4);
console.log(arr3, slicedArray); // [1, 2, 3, 4, 5] [3, 4]


unshift()
//Definition: Adds one or more elements to the beginning of an array and returns the new length of the array.

const arr4 = [1, 2, 3, 4, 5];
const newLength = arr4.unshift(0);
console.log(arr4, newLength); // [0, 1, 2, 3, 4, 5] 6





