// my solutions for the exercises presented during the 
// Callbacks and Higher Order Functions lecture


// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
	return word + 's'
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
function map(array, callback) {
	const newArr = [];
    for (const item of array) {
        newArr.push(callback(item));
    }
	return newArr;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. 
// forEach does not return anything.
function forEach(array, callback) {
	for (const item of array) {
        console.log(callback(item));
    }
}

forEach([1,2,3], addTwo)

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
// In the first part of the extension, you're going to rebuild map as mapWith. 
// This time you're going to use forEach inside of mapWith instead of using a for loop.
function mapWith(array, callback) {
    const newArr = [];
    array.forEach(item => newArr.push(callback(item)));
    return newArr;
}

console.log(mapWith([1, 2, 3], addTwo));


//Extension 2
// The function reduce takes an array and reduces the elements to a single value. 
// For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
    array.forEach(item => {
  	    accumulator = callback(accumulator, item)
    })
    return accumulator;
}

const add = (a, b) => a + b;

console.log(reduce([1,2,3,4,5], add, 0));

//Extension 3
// Construct a function intersection that compares input arrays and 
// returns a new array with elements found in all of the inputs. BONUS: Use reduce!
const isInAll = (accumulator, arrayToCheckAgainst) => {
    const newArray = [];
    accumulator.forEach(item => {
        if (arrayToCheckAgainst.includes(item)) {
          newArray.push(item);
      }
    })
    return newArray;
}

function intersection(...arrays) {
	return reduce(arrays, isInAll, arrays[0])
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// Construct a function union that compares input arrays and returns a new array that contains all elements. 
// If there are duplicate elements, only add it once to the new array. 
// Preserve the order of the elements starting from the first element of the first input array. 
// BONUS: Use reduce!
const unionize = (accumulator, arrayToCheckAgainst) => {
    arrayToCheckAgainst.forEach(item => {
        if (!accumulator.includes(item)) {
            accumulator.push(item);
        }
    })
    return accumulator;
}

function union(...arrays) {
	return reduce(arrays, unionize, []);	
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it. To build the object, 
// objOfMatches will test each element of the first array using the callback 
// to see if the output matches the corresponding element (by index) of the second array. 
// If there is a match, the element from the first array becomes a key in an object, 
// and the element from the second array becomes the corresponding value.
function objOfMatches(array1, array2, callback) {
    const returnObj = {};
  
    array1.forEach((item, index) => {
        if (callback(item) === array2[index]) {
            returnObj[item] = array2[index];
        }
    })
  
    return returnObj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
// Construct a function multiMap that will accept two arrays: 
// an array of values and an array of callbacks. 
// multiMap will return an object whose keys match the elements in the array of values. 
// The corresponding values that are assigned to the keys will be arrays 
// consisting of outputs from the array of callbacks, where the input to each callback is the key.
function multiMap(arrVals, arrCallbacks) {
    const returnObj = {};
  
    arrVals.forEach(val => {
        returnObj[val] = [];
        arrCallbacks.forEach(callback => {
            returnObj[val] = returnObj[val].concat(callback(val))
        })
    })
  
    return returnObj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }