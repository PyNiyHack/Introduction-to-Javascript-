//Operators
//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus  
console.log(a ** b); // Exponentiation

//Assignment Operators  
let c = 20;
c += 5; // c = c + 5
console.log(c);
c -= 5; // c = c - 5                        
console.log(c);
c *= 5; // c = c * 5
console.log(c);
c /= 5; // c = c / 5
console.log(c);
c %= 5; // c = c % 5
console.log(c);
c **= 5; // c = c ** 5
console.log(c);     

//Comparison Operators
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to        
console.log(a != b); // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to   

//Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT

//Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);   

//Conditional Statements
if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age >= 16) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}

 switch(weekday)
    {case 1:
        console.log("Monday");
        break;  
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;      
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid weekday");
    }