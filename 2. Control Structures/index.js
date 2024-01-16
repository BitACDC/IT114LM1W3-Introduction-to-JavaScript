/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fifty
// Your code here
if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
} else {
    console.log(randomNumber);
}

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
let toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: It is a more organized way of doing if else by having multiple switches and conditions leading to multiple paths and ending with a break statement and it also has a default as last condition.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= n; i++) {
  console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) 
{
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: While loop executes on the body although it may not run at all if the condition is initially false , Do-while runs once before a loop condition is checked.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const item of list) {
  console.log(item);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (const index in list) {
    const value = list[index];
    console.log(value);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function (value) {
    console.log(value);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of is good for iterable objects such as arrays, strings, etc. it handles these without dealing with indices
//for in is useful to loop over the keys of an objects and iterating enumerable properties of objects
//for each can be used to perform operatons for each element of an array also has a callback function which allows you to define a action for an element

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleaning up resources");
}



