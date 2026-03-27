//What is a Class?
//A class is a blueprint for creating objects in JavaScript. It defines a set of properties and methods that the objects of the class will have.
//Classes are used to create instances of objects with similar characteristics and behaviors.
//Example of a simple class:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
//Creating an instance of the class:
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice

//What is an Object?
//An object is an instance of a class. It is a collection of properties and methods that represent a specific entity or concept.
//Objects can be created using the class constructor or by using object literals.
//Example of creating an object using a class constructor:
const person2 = new Person('Bob', 25);
person2.greet(); // Output: Hello, my name is Bob
//Example of creating an object using an object literal:
const person3 = {
    name: 'Charlie',
    age: 35,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person3.greet(); // Output: Hello, my name is Charlie

//In summary, a class is a blueprint for creating objects, while an object is an instance of a class that has its own properties and methods.

//Object-Oriented Programming (OOP) is a programming paradigm that uses classes and objects
//to organize code and model real-world entities. 
// It allows for encapsulation, inheritance, and polymorphism, which are key principles of OOP.   

//Encapsulation: Encapsulation is the concept of bundling data and methods that operate on that data within a single unit,
//  such as a class. It allows for data hiding and protects the internal state of an object from external interference.
//Example of encapsulation:
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }   
    deposit(amount) {
        this.balance += amount;
    }   
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }
}
const account1 = new BankAccount('123456', 1000);
account1.deposit(500);
console.log(account1.balance); // Output: 1500
account1.withdraw(200);
console.log(account1.balance); // Output: 1300

        //Inheritance: Inheritance is the mechanism by which one class can inherit properties and methods from another class.
        //  It promotes code reusability and allows for the creation of hierarchical relationships between classes.
//Example of inheritance:
class Animal {
    constructor(name) {
        this.name = name;
    }   
    speak() {
        console.log(`${this.name} makes a sound`);
    }   
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }   
}   
const dog1 = new Dog('Buddy');
dog1.speak(); // Output: Buddy barks    
    
//Polymorphism: Polymorphism is the ability of different classes to be treated as instances of the same class through inheritance.
// It allows for the use of a single interface to represent different types of objects.
//Example of polymorphism:
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows`);
    }   
}
const cat1 = new Cat('Whiskers');
cat1.speak(); // Output: Whiskers meows     
const animals = [new Dog('Buddy'), new Cat('Whiskers')];
animals.forEach(animal => animal.speak());
// Output:
// Buddy barks
// Whiskers meows   


