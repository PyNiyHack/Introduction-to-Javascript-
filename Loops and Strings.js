//Loops
//For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While Loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Do-While Loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for...of Loop
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log(element);
}

//Strings
const str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.slice(0, 5));
console.log(str.replace("World", "JavaScript"));    

//Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);

//String Interpolation
const age = 30;
const message = `I am ${age} years old.`;
console.log(message);

//String Methods
const text = "JavaScript is awesome!";
console.log(text.split(" "));
console.log(text.trim());
console.log(text.startsWith("Java"));
console.log(text.endsWith("!")); 


