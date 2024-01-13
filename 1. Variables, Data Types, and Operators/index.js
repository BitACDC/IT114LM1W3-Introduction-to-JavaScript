/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log('Variables');
function Var()
{
var a = 22;
{
    var a = 23;
    console.log(a);

}
}
console.log(a);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
console.log('Let')
function testLet() {
    let after = 12;
    {
      let a = 22;  
          
      console.log(a);  
          
    }
    console.log(a);  
  }


// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
console.log('Constant variable')
const PI = 3.141592
//PI = PI + 22; //throws an error due to const cannot be changed or added


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
    //Var can be used as a function even outside a block,
    //Let is only specific to a block which they've been declared, 
    //while const is only constant and cannot be changed or added

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log('Aritmetic operators');
let ac = 22 + 64;
ac = (22+64)*7;
console.log(ac);

// Checkpoint 1.2 What operators did you use?
// Answer: I used a addition and multiplication operators to calculate some values
// Your code here


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log('string operators');
let str1 = AC;
let str2 = DC;
let result = str1 + str2;
console.log(result);

// Checkpoint 1.3 What operators did you use?
// Answer: I used addition to combine the letters forming to ACDC

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const age = 17;
const young = true;

if (age >= 16 && young)
{
    console.log("You are old");
}
else{
    console.log("You are too young");
}

// Checkpoint 1.4 What operators did you use?
// Answer: I used {>=} greater than or equal to inorder to get if a age is higher than 16 comparing the age if you're age is 17 higher
// I als used && inorder to be true only if the operand is true


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
