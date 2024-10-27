function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from outerFunction
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction() returns innerFunction
myClosure(); // Calling the returned function (innerFunction)

/*

Explanation:
- outerFunction is a function that defines a variable outerVariable.
- Inside outerFunction, there is another function called innerFunction.
innerFunction has access to outerVariable because it's defined within the same scope.
- When outerFunction is called, it returns the innerFunction but doesn’t execute it yet. 
  The innerFunction is now stored in the variable myClosure.
- When you call myClosure(), it runs innerFunction, which still has access to outerVariable even though outerFunction has finished executing.



How Closures are Useful:
Data Privacy: You can use closures to create private variables that can’t be accessed directly from outside the function.

Callback Functions: Closures are often used in event handlers or asynchronous code where you want to maintain access to certain variables even after some delay.

Factory Functions: Closures can help in creating factory functions that return functions customized with certain parameters.


Another Example: Counter
*/

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter(), 'closer'); // 1
console.log(counter(), 'closer'); // 2
console.log(counter(), 'closer'); // 3
console.log(counter(), 'closer'); // 4

// without closure
function normalCounter() {
    let count = 0;
    count++;
    return count
}

console.log(normalCounter(), 'normal') // 1
console.log(normalCounter(), 'normal') // 1
console.log(normalCounter(), 'normal') // 1

// without closure with global variable

let count = 0;

function incrementCounter() {
    count++;
    return count;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
console.log(incrementCounter()); // Output: 3
