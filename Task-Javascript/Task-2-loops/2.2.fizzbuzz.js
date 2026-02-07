// FizzBuzz
// This function prints numbers from 1 to n.
// For multiples of 3, it prints "Fizz".
// For multiples of 5, it prints "Buzz".
// For multiples of both 3 and 5, it prints "FizzBuzz".


function fizzBuzz(n) {
  // Loop from 1 to n
  for (let i = 1; i <= n; i++) {

    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

    // Check if the number is divisible by 3
    } else if (i % 3 === 0) {
      console.log("Fizz");

    // Check if the number is divisible by 5
    } else if (i % 5 === 0) {
      console.log("Buzz");

    // If none of the above conditions are true, print the number
    } else {
      console.log(i);
    }
  }
}



// Test with n = 15
// Expected output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
// 11, Fizz, 13, 14, FizzBuzz
console.log("FizzBuzz up to 15:");
fizzBuzz(15);
