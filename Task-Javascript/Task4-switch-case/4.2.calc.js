//function to calculate the operation 


//passing operator in switch checks for which arithmetic operation to perform

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      // to handle division by zero used if that checks and handles error
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;

    default:
      return "Invalid operator";
  }
}

// Test cases
console.log(calculator(10, '+', 5)); // 15
console.log(calculator(10, '/', 2)); // 5
console.log(calculator(10, '%', 3)); // "Invalid operator"
