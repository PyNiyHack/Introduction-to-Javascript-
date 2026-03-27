//Arrays
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length);
console.log(fruits[0]);
fruits.push('grape');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);
fruits.shift(); 

//What is Array?
//An array is a data structure that can hold a fixed number of values of the same type.
//It is used to store multiple values in a single variable, instead of declaring separate variables for each value. 
//Arrays are commonly used in programming to organize and manipulate data efficiently. 
//They can be accessed using an index, which starts at 0 for the first element.    

typeof fruits; //object
Array.isArray(fruits); //true   

//Loops and Arrays
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
fruits.forEach(fruit => console.log(fruit));

//Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
 
students = [
    { name: 'Alice', grade: 85 },   
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 }
];
const topStudents = students.filter(student => student.grade >= 90);
console.log(topStudents); // [{ name: 'Bob', grade: 92 }]

//Array Destructuring
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'banana'
const [first, ...rest] = numbers;
console.log(first);

//Nullish Coalescing Operator
const value = null;
const defaultValue = 'Default';
const result = value ?? defaultValue;
console.log(result); // 'Default'
