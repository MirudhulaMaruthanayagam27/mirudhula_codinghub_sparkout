//fetch alone
async function fetchuser(){
  try{
    console.log("fetching data");
    const api_url=await fetch("https://jsonplaceholder.typicode.com/users");
    const api_urldata=await api_url.json();
    console.log("Fetched data:",api_urldata);
  }
  catch(error){
    console.log("error:",error);
  }
  finally{
    console.log("Fetched");
  }
  
}
fetchuser()