//1
function sum(...nums){
  let total=0;
  for(let n of nums){
    total+=n;
  }
  return total;
}
console.log(sum(1,2,3,4));

//2
const [first, ...rest]=[10,20,30,40];
console.log(first);
console.log(rest);

//3
const {name,...other}={name:"Ravi", age:23, city:"Chennai"};
console.log(name);
console.log(other);

//4
function multiply(factor, ...nums){
  return nums.map(n=>n*factor);
}
console.log(multiply(2,1,2,3));
