//Destrcturing


//node  destrcturing2.js

//1.array
const value=[10,20,30];
const [a, b, c]=value;
console.log(a,b,c);

//2.object
const value2={
  age:21,
  address:{
    ad1:"xyz",
    ad2:"abc"
  }
};
const {age , address:{ad1,ad2}} =value2;
console.log(age,ad1,ad2);

//short names
const value3={
  name3:"ravi",
  age3:23,
  address3:{
    streetno:1,
    ad3:"abc2"
  }
};
const {name3:n , age3:aa, address3:{streetno:sn, ad3 :add}} =value3;
console.log(n,aa,sn,add);

//Destructuring -in function
const users={
  name:"ww",
  age:29
};
const des=({name,age})=>{
  console.log(`${name} ,${age}`);
}

des(users);

