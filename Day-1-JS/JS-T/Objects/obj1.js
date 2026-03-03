let obj={
  name:"miru",
  age:21
}
obj.street="ABC"
console.log(obj);

let bank={
  balance:1000,
  deposit(amount){
    this.balance +=amount;
  },
  withdraw(amount){
    this.balance -=amount;
  }
};

bank.deposit(500);
bank.withdraw(200);
console.log(bank.balance);


let car={
  brand:"BMW",
  speed:0,
  start(){
    this.speed=60;
  }
};

car.start();
console.log(car.speed);


let product={
  name: "Shoes",
  price: 2000
};
product.stock = 10;
console.log(product.price);
product.price = 1800;
delete product.stock;


let player={
  health:100,
  hit(){
    this.health -= 20;
  }
};

player.hit();
console.log(player.health);


let classroom = {
  students:30,
  add(){
    this.students++;
  },
  remove(){
    this.students--;
  }
};

classroom.add();
classroom.remove();
console.log(classroom.students);