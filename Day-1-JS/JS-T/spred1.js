let cart = ["Shoes", "Watch"];
let newCart = [...cart, "Bag"];
console.log(newCart);

let user = {
  name: "Ram",
  age: 22,
  city: "Chennai"
};
let updatedUser = {
  ...user,
  city: "Bangalore"
};
console.log(updatedUser);