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
class Book1 {
  title: string;
  author: string;
  year: number;
  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
const book1 = new Book1("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
console.log(
  `Sách: ${book1.title}, Tác giả: ${book1.author}, Năm: ${book1.year}`
);

// Câu 7.
console.log("Câu 7.");
class User1 {
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
const user1 = new User1("Nam");
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
interface Animal1 {
  name: string;
  sound(): void;
}
class Dog1 implements Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name} sủa: go go`);
  }
}
const dog1 = new Dog1("Milo");
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

// src/index.ts

// ================= Câu 11 =================
console.log("Câu 11");

class Animal {
  speak() {
    console.log("Động vật đang phát ra âm thanh...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Chó sủa gâu gâu!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Mèo kêu meo meo!");
  }
}

const dog = new Dog();
dog.speak();
dog.bark();

const cat = new Cat();
cat.speak();
cat.meow();

// ================= Câu 12 =================
console.log("Câu 12");

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly() {
    console.log("Chim");
  }
}

class Fish implements Swimmable {
  swim() {
    console.log("Cá");
  }
}

const bird = new Bird();
bird.fly();

const fish = new Fish();
fish.swim();

console.log("Câu 13");

abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(5);
console.log("Diện tích hình vuông:", square.area());

const circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.area());

// ================= Câu 14 =================
console.log("Câu 14");

class Employee {
  constructor(public name: string) {}
}

class Manager extends Employee {
  manage() {
    console.log(`${this.name} đang quản lý dự án.`);
  }
}

class Developer extends Employee {
  code() {
    console.log(`${this.name} đang viết code.`);
  }
}

const manager = new Manager("An");
manager.manage();

const developer = new Developer("Bình");
developer.code();

// ================= Câu 15 =================
console.log("Câu 15");

class Book {
  constructor(public title: string) {}
}

class User {
  constructor(public name: string) {}
}

class Library {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  listBooks() {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((b) => console.log(b.title));
  }
}

const library = new Library();
library.addBook(new Book("Lập trình TypeScript"));
library.addBook(new Book("Cơ sở dữ liệu NoSQL"));
library.listBooks();

console.log("Câu 16");

class Box<T> {
  constructor(public value: T) {}
}

const numberBox = new Box<number>(123);
console.log("Giá trị trong Box:", numberBox.value);

const stringBox = new Box<string>("Xin chào");
console.log("Giá trị trong Box:", stringBox.value);

console.log("Câu 17");

class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log("LOG:", message);
  }
}

const logger1 = Logger.getInstance();
logger1.log("Đây là log đầu tiên");

const logger2 = Logger.getInstance();
logger2.log("Đây là log thứ hai");

console.log("Câu 18");

class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
  static subtract(a: number, b: number) {
    return a - b;
  }
  static multiply(a: number, b: number) {
    return a * b;
  }
  static divide(a: number, b: number) {
    return a / b;
  }
}

console.log("Cộng:", MathUtil.add(5, 3));
console.log("Trừ:", MathUtil.subtract(5, 3));
console.log("Nhân:", MathUtil.multiply(5, 3));
console.log("Chia:", MathUtil.divide(6, 3));

console.log("Câu 19");

class Animal2 {
  speak() {
    console.log("Động vật kêu...");
  }
}

class Dog2 extends Animal2 {
  speak() {
    console.log("Chó kêu gâu gâu!");
  }
}

class Cat2 extends Animal2 {
  speak() {
    console.log("Mèo kêu meo meo!");
  }
}

const animals: Animal2[] = [new Dog2(), new Cat2()];
animals.forEach((a) => a.speak());
