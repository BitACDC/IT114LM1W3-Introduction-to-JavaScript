/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Aldjon Cayl!");


// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: a function declaration has a complete body of code they can used or called again
// function expression are anonymous and mostly to just create a quick function

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
  return length * width;
};

const areaResult = calculateArea(5, 10);
console.log("Area:", areaResult);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a passed down function acting as a argument to another function to be invoked inside the outer function.
//Example:
// function doSomethingAsync(callback) {
//   setTimeout(function() {
//     console.log("Task Done!");
//     callback();
//   }, 1000);
// }
// doSomethingAsync(function() {
//   console.log("Callback called");
// });

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(arr, modifier) {
  return arr.map(modifier);
}

const numbers = [1, 2, 3, 4, 5];
const incrementByOne = function (num) {
  return num + 1;
};

const modifiedArray = modifyArray(numbers, incrementByOne);
console.log("Modified Array:", modifiedArray);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const mathUtils = require('./mathUtils');
const { add, PI } = mathUtils;

console.log("Add Result:", add(3, 4));
console.log("PI Constant:", PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const isPalindrome = require('./isPalindrome');
console.log("Is 'radar' a palindrome?", isPalindrome("radar"));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: require function and module.exports are for module management it allows you to add a function from other files to a node.js application
//both of the core functions and modules work towards the same goal as export and import  is to facilitate modularization and code organization in a way that promotes reusability and maintainability in software development

