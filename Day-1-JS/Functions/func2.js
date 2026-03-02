//Add two num
const add = (a, b) => a + b;
console.log(add(5, 3)); 

//Square
const square = n => n * n;
console.log("Square of 4:", square(4)); 

//even or odd
const isEven = num => num % 2 === 0;
console.log(isEven(7)); 
console.log(isEven(10)); 

const greet = name => `Hello, ${name}!`;
console.log(greet("Mirudhula")); 


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 