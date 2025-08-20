// Câu 1.
console.log("Câu 1.");
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  displayInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
  }
}
const person1 = new Person("Minh", 18);
person1.displayInfo();

// Câu 2.
console.log("Câu 2.");
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  displayAllInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Hạng: ${this.grade}`);
  }
}
const student1 = new Student("Bình", 20, "A");
student1.displayAllInfo();

// Câu 3.
console.log("Câu 3.");
class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  showInfo(): void {
    console.log(`Hãng: ${this.brand}, Mẫu: ${this.model}, Năm: ${this.year}`);
  }
}
const car1 = new Car("Toyota", "Vios", 2022);
car1.showInfo();

// Câu 4.
console.log("Câu 4.");
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const rect1 = new Rectangle(5, 10);
console.log("Diện tích:", rect1.area());
console.log("Chu vi:", rect1.perimeter());

// Câu 5.
console.log("Câu 5.");
class BankAccount {
  balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Không đủ tiền");
    }
  }
}
const acc1 = new BankAccount(1000);
acc1.deposit(500);
acc1.withdraw(300);
console.log("Số dư:", acc1.balance);

// Câu 6.
console.log("Câu 6.");
class Book {
  title: string;
  author: string;
  year: number;
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
console.log(
  `Sách: ${book1.title}, Tác giả: ${book1.author}, Năm: ${book1.year}`
);

// Câu 7.
console.log("Câu 7.");
class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
  }
}
const user1 = new User("Nam");
console.log("Tên người dùng:", user1.name);
user1.name = "Minh";
console.log("Tên người dùng sau khi thay đổi:", user1.name);

// Câu 8.
console.log("Câu 8.");
class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
const products: Product[] = [
  new Product("A", 50),
  new Product("B", 150),
  new Product("C", 200),
];
const expensiveProducts = products.filter((p) => p.price > 100);
console.log("Sản phẩm > 100:", expensiveProducts);

// Câu 9.
console.log("Câu 9.");
interface Animal {
  name: string;
  sound(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name} sủa: go go`);
  }
}
const dog1 = new Dog("Milo");
dog1.sound();

// Câu 10.
console.log("Câu 10.");
class Account {
  public username: string;
  private password: string;
  readonly id: number;
  constructor(username: string, password: string, id: number) {
    this.username = username;
    this.password = password;
    this.id = id;
  }
}
const acc2 = new Account("user123", "pass123", 1);
console.log(`Tài khoản: ${acc2.username}, Mã số: ${acc2.id}`);
