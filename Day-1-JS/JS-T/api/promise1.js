
const promise=new Promise((resolve,reject) => {
  const error=false;
  if(!error){
    resolve("resolved");
  }
  else{
    reject("rejected");
  }
})
console.log(promise);