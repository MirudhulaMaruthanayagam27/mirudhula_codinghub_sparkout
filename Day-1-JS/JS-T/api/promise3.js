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
checkage(20)
.then(res => console.log(res))
.catch(err => console.log(err));

//login system
function login(name,pass){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(name=="miru" && pass==123){
        resolve("Logged In");
      }
      else{
        reject("Logout");
      }
    },2000);
    
  })
}
login("miru",123)
.then(out => console.log(out))
.catch(err => console.log(err));