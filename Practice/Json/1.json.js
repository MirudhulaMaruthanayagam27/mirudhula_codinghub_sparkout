const obj={

  name:"miru",
  content:["earn","grow","give"],
  sub:function(){
    console.log("thanks");
  }
};

console.log(obj);
obj.sub();

const sendjson=JSON.stringify(obj);
console.log(sendjson);
//string type
console.log(typeof sendjson);

const receivejson=JSON.parse(sendjson);
console.log(receivejson);