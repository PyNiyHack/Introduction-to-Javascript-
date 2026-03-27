//What is Function and Methods in JavaScript?
//Function: A function is a reusable block of code that performs a specific task.
//It can take input parameters, execute a series of statements, and return a value.
//Functions are defined using the `function` keyword or as arrow functions in JavaScript.
//Example of a function:
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

//Method: A method is a function that is defined as a property of an object. 
//It can be called on that object and has access to the object's properties and methods.
//Example of a method:
const person = {
    name: "Bob",
    greet: function() {
        return "Hello, " + this.name + "!";
    }
};
console.log(person.greet()); // Output: Hello, Bob!

//In summary, a function is a standalone block of code that can be called independently,
//while a method is a function that is associated with an object and can access the object's properties and other methods.   

//Differences between Function and Methods:
//1. Definition: A function is defined independently, while a method is defined as a property of an object.
//2. Invocation: A function is called by its name, while a method is called on an object using dot notation.
//3. Context: A function does not have access to the properties of an object unless explicitly passed as parameters, 
//while a method has access to the properties of the object it belongs to through the `this` keyword.
//4. Usage: Functions are used for general-purpose tasks, while methods are used to perform actions related to the object they belong to.

//Arrow Functions: Arrow functions are a concise way to write functions in JavaScript.
//They are defined using the `=>` syntax and do not have their own `this` context.
//Example of an arrow function:
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

//Async Functions: Async functions are functions that return a Promise and can be used with the `await` keyword to handle asynchronous operations.
//Example of an async function:
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    }   
    catch (error) {
        console.error('Error fetching data:', error);
    }   
}
fetchData();    
