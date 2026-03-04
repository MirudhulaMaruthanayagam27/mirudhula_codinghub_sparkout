//check age>=18
function checkage(age){
  return new Promise((resolve, reject) => {
    if(age>=18){
      resolve(">=18");
    }
    else{
      reject("< 18");
    }
  });
}
checkage(20).then(res => console.log(res))
.catch(err => console.log(err));