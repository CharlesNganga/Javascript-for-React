# Module 1: JavaScript Basic Syntax & Operators

## 1. Introduction to JavaScript
JavaScript is a versatile programming language primarily used for:
- Creating interactive web pages
- Building web and mobile applications
- Server-side development (Node.js)
- Desktop applications (Electron)

### Key Characteristics:
- Dynamically typed
- Just-in-time compiled
- First-class functions
- Object-oriented with prototypal inheritance

## 2. Development Environment Setup

### Required Tools:
1. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/
   - Recommended extensions:
     - ESLint
     - Prettier
     - JavaScript (ES6) code snippets
     - Live Server

2. **Node.js**
   - Download from: https://nodejs.org/
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **GitHub Account**
   - Sign up at: https://github.com/
   - Install Git: https://git-scm.com/

## 3. Variables & Data Types

### Variable Declaration:
```javascript
// let - block-scoped, reassignable
let age = 25;
age = 26; // Valid

// const - block-scoped, not reassignable
const PI = 3.14159;
// PI = 3.14; // Error!

// var - function-scoped (avoid using)
var name = "John"; // Not recommended
```

### Data Types:

1. **Primitive Types:**
   ```javascript
   // Number
   let integer = 42;
   let float = 3.14;
   let infinity = Infinity;
   let notANumber = NaN;

   // String
   let singleQuotes = 'Hello';
   let doubleQuotes = "World";
   let backticks = `Hello ${singleQuotes}`; // Template literal

   // Boolean
   let isTrue = true;
   let isFalse = false;

   // Undefined
   let undefinedVar;

   // Null
   let nullVar = null;

   // Symbol
   let symbol = Symbol('description');
   ```

2. **Object Type:**
   ```javascript
   // Object
   let person = {
     name: "John",
     age: 30
   };

   // Array
   let numbers = [1, 2, 3, 4, 5];

   // Function
   let greet = function() {
     return "Hello!";
   };
   ```

## 4. Operators

### Arithmetic Operators:
```javascript
let a = 10;
let b = 5;

let addition = a + b;        // 15
let subtraction = a - b;     // 5
let multiplication = a * b;  // 50
let division = a / b;        // 2
let modulus = a % b;        // 0
let exponent = a ** b;      // 100000

// Increment/Decrement
let counter = 0;
counter++;  // Postfix increment
++counter;  // Prefix increment
counter--;  // Postfix decrement
--counter;  // Prefix decrement
```

### Comparison Operators:
```javascript
let x = 5;
let y = "5";

// Equality
console.log(x == y);   // true (loose equality)
console.log(x === y);  // false (strict equality)

// Inequality
console.log(x != y);   // false (loose inequality)
console.log(x !== y);  // true (strict inequality)

// Greater/Less Than
console.log(x > 3);    // true
console.log(x < 10);   // true
console.log(x >= 5);   // true
console.log(x <= 4);   // false
```

### Logical Operators:
```javascript
let isAdult = true;
let hasLicense = false;

// AND operator
console.log(isAdult && hasLicense);  // false

// OR operator
console.log(isAdult || hasLicense);  // true

// NOT operator
console.log(!isAdult);  // false
```

### Ternary Operator:
```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // "Yes"
```

## 5. Type Coercion & Best Practices

### Type Coercion Examples:
```javascript
// String concatenation
console.log("3" + 4);        // "34"
console.log(4 + "3");        // "43"
console.log("3" + "4");      // "34"

// Numeric operations
console.log("3" - 2);        // 1
console.log("3" * "2");      // 6
console.log("10" / "2");     // 5

// Boolean coercion
console.log(Boolean(""));     // false
console.log(Boolean(0));      // false
console.log(Boolean("0"));    // true
console.log(Boolean([]));     // true
```

### Best Practices:
1. Always use strict equality (`===`) and inequality (`!==`)
2. Use `const` by default, `let` when reassignment is needed
3. Avoid `var`
4. Use meaningful variable names
5. Be explicit about type conversions:
   ```javascript
   // Good
   let numberAsString = String(123);
   let stringAsNumber = Number("123");
   let booleanValue = Boolean(1);

   // Avoid implicit coercion
   let badExample = "3" + 4;  // Avoid
   let goodExample = String(3) + String(4);  // Better
   ```

## 📝 Practice Exercise: Simple Calculator

Create a calculator that can perform basic arithmetic operations:

```javascript
function calculator(num1, num2, operator) {
    // Convert input to numbers
    num1 = Number(num1);
    num2 = Number(num2);
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter valid numbers";
    }
    
    // Perform operation based on operator
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Test the calculator
console.log(calculator(5, 3, '+'));  // 8
console.log(calculator(10, 2, '*')); // 20
console.log(calculator(15, 3, '/')); // 5
console.log(calculator(8, 3, '-'));  // 5
```

## 🎯 Additional Exercises:

1. Create variables of each type and log their types using `typeof`
2. Practice type coercion by trying different combinations of operations
3. Write a program that converts temperatures between Celsius and Fahrenheit
4. Create a BMI calculator using arithmetic operators
5. Write a program that determines if a year is a leap year using logical operators

## 📚 Resources for This Module:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info - JavaScript Fundamentals](https://javascript.info/first-steps)
- [freeCodeCamp JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)