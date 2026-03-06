//1
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

//2 
class Circle {
  constructor(radius)
  { 
    this.radius = radius; 
  }
    area() { 
      return 3.14 * this.radius * this.radius; 
    }
    showArea() {
      console.log(`Circle Area: ${this.area()}`); 
    }
}

//3 Rectangle
class Rectangle {
  constructor(length, width) { 
    this.length = length; 
    this.width = width; 
  }
  area() { 
    return this.length * this.width; }
    showArea() { 
      console.log(`Rectangle Area: ${this.area()}`); 
    }
}

//4 BankAccount
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amt) { 
    this.balance += amt; 
  }
  withdraw(amt) { 
    this.balance -= amt; 
  }
  showBalance() { 
    console.log(`Account ${this.accountNumber} Balance: ${this.balance}`); 
  }
}

//5 Employee
class Employee {
  constructor(name, salary) { 
    this.name = name; 
    this.salary = salary; }
    annualSalary() { 
      return this.salary * 12; 
    }
    showSalary() { 
      console.log(`${this.name}'s Annual Salary: ${this.annualSalary()}`); 
    }
}


const s = new Student("Mirudhula", 22); 
s.display();
const c = new Circle(5); 
c.showArea();
const r = new Rectangle(10,5); 
r.showArea();
const b = new BankAccount(101,5000); 
b.deposit(2000); 
b.withdraw(1000);
b.showBalance();
const e = new Employee("John", 4000); 
e.showSalary();
