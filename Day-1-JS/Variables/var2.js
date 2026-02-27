//function scope
function sum(a,b){
  var a1=a+b;
  console.log(a1);
}
//not block scope
console.log(a1);
sum(2,3);