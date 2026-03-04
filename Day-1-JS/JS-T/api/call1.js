//1
function greet(name,callback){
  callback(name);
}
function hello(name){
  console.log("hi" +" " + name);
}
greet("Miru",hello);

//2
function add(a,b,callback){
  callback(a+b);
}
add(2,3,function(res){
  console.log(res);
});

//3
function expo(a,b,callback){
  callback(a^b);
}
expo(8,3,function(res){
  console.log(res);
});

//4
function user(callback){
  const user={
    nam:"abc",
    age:20
  }; 
  callback(user);
}
user(function(res){
  console.log(user.name);
});

//5
function fullname(frst,last, callback){
  callback(frst+ " " + last);
}
fullname("miru","miru s",function(name){
  console.log(name);
});

//6
function fetchData(callback) {
  const data = "Sample Data";
  callback(data);
}
fetchData(function(result) {
  console.log(result);
});