/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
let item1 = numbers[0];
let item5 = numbers[4];
let lastItem = numbers[numbers.length - 1];

console.log(item1, item5, lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minNum = Math.min(...numbers);
let maxNum = Math.max(...numbers);
let averageNum = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

console.log(minNum, maxNum, averageNum);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Python can be a lot more versatile when it comes to holding elements of different data types, while JavaScript arrays are more specialized and are typically used for a single data type.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let it114LObject = 
    {
        courseCode: 'IT114L',
        name: 'Aldjon Cayl P. Dela Cruz',
        units: 1,
        numberOfStudents: 40
    }
console.log(it114LObject);

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
it114LObject.professorName = 'Job Lipat';
console.log(it114LObject.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let coursesArray = [
    { courseCode: 'CS102', name: 'Data Structures and Algorithms', units: 2},
    { courseCode: 'HUM039', name: 'Ethics', units: 3},
    { courseCode: 'IT132L', name: 'Logic Design and Switching(Laboratory)', units: 1},
    { courseCode: 'IT132', name: 'Logic and Design Switching', units: 2},
    { courseCode: 'PE044', name: 'Physical Activities towards health and fitness', units: 2},
    { courseCode: 'IT133', name: 'Technopreneurship', units: 3},
    { courseCode: 'VE022', name: 'Values Education', units: 3}, // Added a value for units
    { courseCode: 'IT114L', name: 'Web Systems and Technologies(Laboratory)', units: 1},
    { courseCode: 'IT114', name: 'Web Systems and Technologies', units: 2},
];

console.log(coursesArray);

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = coursesArray.reduce((acc, course) => acc + course.units, 0);
console.log('Total Units:', totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: In python and Javascript both of them uses dictionaries to store collections of key-value pairs.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let copiedNumbers = [...numbers, 7];
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode: it114lCode, units: it114lUnits } = it114LObject;
console.log(it114lCode, it114lUnits);
