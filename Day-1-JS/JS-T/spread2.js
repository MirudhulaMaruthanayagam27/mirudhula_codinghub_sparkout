// 1
const arr1 = [1,2,3];
const arr2 = [...arr1, 4,5];
console.log(arr2);

// 2
const user = {name:"Ravi", age:23};
const newUser = {...user, city:"Kovai"};
console.log(newUser);

// 3
const nums = [10,20,30];
console.log(Math.max(...nums));

// 4
const fruits = ["apple","banana"];
const nfruits = ["mango","orange"];
const all = [...fruits, ...nfruits];
console.log(all);

// 5
function sum(a,b,c){ 
  return a+b+c; 
}
const nums1 = [5,10,15];
console.log(sum(...nums1));