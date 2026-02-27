var s1=20;

function varb(val){
  var s2=200;
  if(val==10){
    var s3=s1+s2;
    console.log(s3);
  }
}
varb(10);
console.log(s1);
//Function-scope: console.log(s2);
//Block-scope:inside function not accesible :console.log(s3);

