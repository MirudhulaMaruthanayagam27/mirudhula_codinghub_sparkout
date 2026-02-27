//let-Function scope
console.log("let-Function scope");
function sub(a,b){
  console.log(a+b);
}
//not accessed: console.log(a+b);
sub(3,1);

//let-block scope,global
console.log("let-blockscope")
let a11=20;
function sub1(a,b){
  let a1=10;
  if(a<=b){
    let b1= a+b-a1;
    console.log("Inside block1:",b1);
  }
  console.log("outside block1:",a1);
  //console.log("outside block2:",b1);
}
//not accessed: console.log(a+b);
sub1(3,1);
console.log("outside blockf3:",a11);
//console.log("outside block:",b1);