/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers);
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords);
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const wordsWithMoreThanFourLetters = words.filter(word => word.length > 4);
console.log(wordsWithMoreThanFourLetters);
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedWords = words.reduce((acc, word) => acc + word, '');
console.log(concatenatedWords);
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// MAP: forms a new array and all of the elements ar given a function of an existing array
//FILTER: creates a new array by including only to the elements that satisfy a certain condition from an existing array
//REDUCE: applies a function to each elemtent of an array, accumalating the result to a single value.
