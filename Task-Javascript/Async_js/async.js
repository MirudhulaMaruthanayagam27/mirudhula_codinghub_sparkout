/*const users=fetch("https://jsonplaceholder.typicode.com/users").then(response => {
  console.log(response);
})
console.log(users);*/


/*const users=fetch("https://jsonplaceholder.typicode.com/users").then(response => {
  return response.json();
}).then(users =>{
  console.log(users);
})
console.log(users);
*/

//use foreach

/*const users=fetch("https://jsonplaceholder.typicode.com/users").then(response => {
  return response.json();
}).then(users =>{
  users.forEach(user =>{
    //console.log(user);
    document.body.innerHTML += `<pre>${JSON.stringify(user, null, 2)}</pre>`;
  })
})
console.log(users);*/


//using async,await

const myUsers={
   user:[]
}
const users= async() =>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  const userData=await response.json();
  console.log(userData);
  return userData;
}

const f2=async() =>{
  const data=await users();
  myUsers.user=data
  return data
}
f2();
console.log(myUsers)

/* format-2
const myUser={
  user:[]
}
const users=async() =>{
  const response=await fetch("");
  const userdata=await response.json();
  anotherfunc(userdata);
  return userdata;
  )
}

const anotherfunc=(data)=>{
  myUser.user=data
  return data
}

users()
console.log(myUser)
*/