//Variable Declaration

//Let block-scoped variable, reassignable
let age = 23;
age = 24; //Reassignable

//Const block-scoped variable, non-reassignable
const PI = 3.14; //Non-reassignable

//Var function-scoped variable, reassignable (not recommended)
var name = "John"; 

console.log(age);
console.log(PI);
console.log(name);  



//Data Types

//Primitive Data Types
//Number
let integer = 10;
let float = 10.5;
let negative = -10;
let exponential = 2e5; //200000
let exponentialNegative = 2e-5; //0.00002
let hexadecimal = 0x1A; //26
let octal = 0o12; //10
let binary = 0b1010; //10
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

//String
let singleQuote = 'Hello';
let doubleQuote = "Hello";
let backtick = `Hello ${singleQuote}`; //Template Literal

//Boolean
let isTrue = true;
let isFalse = false;

//Undefined
let undefinedVariable;

//Null
let nullVariable = null;

//Symbol
let symbol = Symbol('description');


//Object Data Types
//Object
let person = {
    name: "John",
    age: 23 
};

//Array
let fruits = ['Apple', 'Banana', 'Cherry'];

//Function
let greet = function() {
    return "Hello";
}

//Date
let today = new Date();

