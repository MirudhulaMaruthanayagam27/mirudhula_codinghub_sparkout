function checknum(num, callback) {
  callback(num);
}

function res(num) {
  if(num % 2 === 0){
    console.log("Even");
  } 
  else{
    console.log("Odd");
  }
}

checknum(7, res);