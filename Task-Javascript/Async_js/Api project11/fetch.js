/*const joke=async() =>{
  const response=await fetch("https://icanhazdadjoke.com/", {
    method:"GET",
    headers:{
      Accept:"application/json"
      //text/plain--no need json-const jsonjoke=await response.text()
    }
  })
  const jsonjoke=await response.json()
  console.log(jsonjoke)
}
joke()*/

const jokeobj={
  id:'a5opsnadnd949i9',
  joke:'hi hello'post
}
const postjoke=async(jokeobj) =>{
  const response=await fetch("https://httpbin.org/post", {
    method:"POST",
    headers:{
      "Content-type":"application/json"
      //text/plain--no need json-const jsonjoke=await response.text()
    }
    body:JSON.stringify(jokeobj);

  })
  const responseData=await response.json()
  console.log(responseData);
}
postjoke(jokeobj)