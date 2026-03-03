//read
let student = {
  name:"Mirudhula",
  age:21, 
  course:"JS Beginner"
};
console.log(student.name);
console.log(student.age);
console.log(student["course"]);

//update
let studentu = {
  name: "Mirudhula",
  age: 21,
  course:"JS Beginner"
};
studentu.age = 22;
studentu["course"] = "JS Advanced";
console.log(studentu);

//delete
let student_d = {
  name:"Mirudhula",
  age: 22,
  course:"JS Advanced"
};
delete student_d.course;
console.log(student_d);

//loop
let students = {
  name:"Mirudhula",
  age:22,
  city:"Chennai"
};
for(let key in students) {
  console.log(key + ":", students[key]);
}