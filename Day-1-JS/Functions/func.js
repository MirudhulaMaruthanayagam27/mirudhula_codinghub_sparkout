function greet() {
  console.log("Hello, Mirudhula!");
}
greet();


function add(a, b) {
  console.log(a + b);
}
add(5, 3);


function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 6);
console.log(result);


function testScope() {
  let message = "local";
  console.log(message);
}
testScope();


let globalVar = "global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal();
console.log(globalVar);


const greetUser = function(name) {
  console.log("Hi " + name);
};
greetUser("Mirudhula");


const square = (n) => n * n;
console.log(square(5));

(function() {
  console.log("I run automatically!");
})();


function greetPerson(name = "Guest") {
  console.log("Hello, " + name);
}


greetPerson();
greetPerson("Mirudhula");


function outer() {
  let outerVar = "outer";
  return function inner() {
    console.log(outerVar);
  };
}
let innerFunc = outer();
innerFunc();


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));


function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) total += num;
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5));