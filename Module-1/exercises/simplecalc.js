function calculator(num1, num2, operator) {
    //Converting the input string to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    //Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter valid numbers";
    }

    //Check for the operator
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
            return "Invalid Operator";
    }
}

// Test the calculator
console.log(calculator(5, 3, '+'));  // 8
console.log(calculator(10, 2, '*')); // 20
console.log(calculator(15, 3, '/')); // 5
console.log(calculator(8, 3, '-'));  // 5
console.log(calculator("abc", 3, '+'));  // "Please enter valid numbers"
console.log(calculator(5, 0, '/'));  // "Cannot divide by zero"
console.log(calculator(7, 2, '^'));  // "Invalid operator"
