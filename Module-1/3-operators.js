//Arithmetic operators
let a = 10;
let b = 7;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
let exponent = a ** b;

//Increment and Decrement operators
let x = 10;
x++; // x = x + 1 Postfix increment
++x; // x = x + 1 Prefix increment
x--; // x = x - 1 Postfix decrement
--x; // x = x - 1 Prefix decrement


//Comparison operators
let p = 5;
let q = "5";

//Equality
console.log(p == q); //true (loose equality)
console.log(p === q); //false (strict equality)

//Inequality
console.log(p != q); //false (loose inequality)
console.log(p !== q); //true (strict inequality)

//Relational
console.log(p > 3); //true
console.log(p < 10); //true
console.log(p >= 5); //true
console.log(p <= 4); //false

//Logical operators
let isAdult = true;
let hasLicense = false;

//Logical AND
console.log(isAdult && hasLicense); //false

//Logical OR
console.log(isAdult || hasLicense); //true

//Logical NOT
console.log(!isAdult); //false

//Ternary operator (? :)  condition ? value_if_true : value_if_false;
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); //Yes
