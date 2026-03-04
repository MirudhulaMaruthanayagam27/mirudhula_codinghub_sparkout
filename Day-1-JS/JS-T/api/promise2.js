//3 states:pending,fulfilled,rejected
const val=Promise.resolve("Hi Mirudhula");

val.then ( res => {
  console.log("This is result",res);
  return "step1 done ,next"
})
.then(res1 => {
  console.log("res1 solved");
})
.catch(err => {
  console.log(err);
});