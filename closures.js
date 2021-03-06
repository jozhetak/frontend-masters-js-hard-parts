// my solutions for the exercises presented during the Closures lecture
// see the relevant question prompts here: http://csbin.io/closures

function createFunction() {
    return function () {
        console.log('hello');
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();



function createFunctionPrinter(input) {
    return function () {
        console.log(input);
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
    var counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
    return function (y) {
        return x + y;
    }
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));


// now call addByTwo with an input of 2
console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
    let called = false;
    let result;

    return function (x) {
        if (called) {
            return result;
        }
        called = true;
        result = func(x);
        return result;
    }
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(numTimes, func) {
    let count = 0;

    return function () {
        count++;
        if (count < numTimes) {
            return;
        }
        func();
    }
}

var called = function () { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
    return setTimeout(func, wait);
}

function logWaited() {
    console.log('waited')
}

delay(logWaited, 3000);