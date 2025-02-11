# Module 2: Control Structures in JavaScript

## 1. Conditional Statements

### if...else Statements
```javascript
// Basic if statement
if (condition) {
    // code to execute if condition is true
}

// if...else
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

// if...else if...else
if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else {
    // code if no conditions are true
}

// Example: Grade Calculator
function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
```

### switch Statement
```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}

// Example: Day of Week
function getDayType(day) {
    switch (day.toLowerCase()) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            return 'Weekday';
        case 'saturday':
        case 'sunday':
            return 'Weekend';
        default:
            return 'Invalid day';
    }
}
```

## 2. Loops

### for Loop
```javascript
// Basic for loop
for (initialization; condition; increment/decrement) {
    // code to execute
}

// Example: Sum of numbers
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Nested for loops
// Example: Multiplication table
function createMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= size; j++) {
            row += `${i * j}\t`;
        }
        console.log(row);
    }
}
```

### while Loop
```javascript
while (condition) {
    // code to execute
}

// Example: Guess the number game
function guessNumber(target) {
    let attempts = 0;
    let guessed = false;
    
    while (!guessed && attempts < 5) {
        let guess = parseInt(prompt('Guess a number between 1 and 10:'));
        attempts++;
        
        if (guess === target) {
            guessed = true;
            return `Congratulations! You guessed it in ${attempts} attempts!`;
        }
    }
    return 'Sorry, you ran out of attempts!';
}
```

### do...while Loop
```javascript
do {
    // code to execute
} while (condition);

// Example: Input validation
function getValidInput() {
    let input;
    do {
        input = prompt('Enter a positive number:');
    } while (isNaN(input) || input <= 0);
    return input;
}
```

### for...of Loop (Arrays)
```javascript
// Iterating over arrays
for (let element of array) {
    // code to execute
}

// Example: Calculate average
function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
```

### for...in Loop (Objects)
```javascript
// Iterating over object properties
for (let key in object) {
    // code to execute
}

// Example: Print object properties
function printObjectProperties(obj) {
    for (let prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}
```

## 3. Best Practices for Control Structures

### 1. Keep Conditions Simple
```javascript
// Bad
if (age >= 18 && isStudent && !hasDiscount && totalPurchase > 100) {
    // code
}

// Better
const isEligibleAge = age >= 18;
const isQualifiedStudent = isStudent && !hasDiscount;
const meetsMinimumPurchase = totalPurchase > 100;

if (isEligibleAge && isQualifiedStudent && meetsMinimumPurchase) {
    // code
}
```

### 2. Early Returns
```javascript
// Bad
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                // process user
            }
        }
    }
}

// Better
function processUser(user) {
    if (!user) return;
    if (!user.isActive) return;
    if (!user.hasPermission) return;
    // process user
}
```

### 3. Avoid Deep Nesting
```javascript
// Bad
function deeplyNested(a, b, c) {
    if (a) {
        if (b) {
            if (c) {
                // code
            }
        }
    }
}

// Better
function flattenedLogic(a, b, c) {
    if (!a || !b || !c) return;
    // code
}
```

## 📝 Practice Exercise: Number Guessing Game

Create a more sophisticated version of the number guessing game:

```javascript
function advancedGuessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;
    
    while (attempts < maxAttempts) {
        let guess = parseInt(prompt(`Guess a number between 1 and 100 (${maxAttempts - attempts} attempts left):`));
        attempts++;
        
        if (isNaN(guess)) {
            console.log('Please enter a valid number');
            attempts--;
            continue;
        }
        
        if (guess === target) {
            return `Congratulations! You found the number ${target} in ${attempts} attempts!`;
        } else if (guess < target) {
            console.log('Too low! Try again.');
        } else {
            console.log('Too high! Try again.');
        }
    }
    
    return `Game Over! The number was ${target}`;
}
```

## 🎯 Additional Exercises:

1. Create a FizzBuzz program using loops and conditionals
2. Build a simple calculator using switch statements
3. Create a pattern printing program using nested loops
4. Implement a prime number checker
5. Create a program that validates user input with do...while loops

## 🔍 Common Pitfalls to Avoid:

1. Forgetting break statements in switch cases
2. Infinite loops due to incorrect conditions
3. Off-by-one errors in for loops
4. Using wrong loop types for specific scenarios
5. Complex nested conditions that are hard to maintain

## 📚 Resources for This Module:
- [MDN Control Flow Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info Loops Guide](https://javascript.info/while-for)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript#control-structures)