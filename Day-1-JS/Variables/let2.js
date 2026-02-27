let x1=15;
function change(){
  let x11=20;
  console.log("inside funct:",x11);
  x1=35;
  if(x11<25){
    let x12=x1+10;
    console.log("inside block:",x12);
    x1=45;
  }
  console.log("inside block:",x12);

}
change();
console.log(x1);