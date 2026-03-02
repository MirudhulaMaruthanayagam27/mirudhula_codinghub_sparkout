const numarr = [1, 2, 3, 4, 5, 6];
const doubled = numarr.map(num => num * 2);
console.log(doubled);

const fruit = ["apple", "banana", "mango"];
const upper= fruit.map(fruit => fruit.toUpperCase());
console.log(upper);

const div2=[1,2,3,5];
const evens = div2.filter(num => num % 2 === 0);
console.log(evens);

const add=[1,2,3];
const sum = add.reduce((acc, curr) => acc + curr, 0);
console.log(sum);