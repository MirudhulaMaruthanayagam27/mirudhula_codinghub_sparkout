let x1=15;
function change(){
  let x=20;
  console.log("inside funct:",x);
  x1=35;
  if(x<25){
    let x=x1+10;
    console.log("inside block:",x);
    x1=45;
  }
}
change();
console.log(x1);