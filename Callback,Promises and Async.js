//What is Callback?
//A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations in JavaScript, such as fetching data from an API or performing a time-consuming task without blocking the main thread.    
//Example of a callback function:
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from API";
        callback(data);
    }, 2000);
}
fetchData((result) => {
    console.log(result); // Output: Data fetched from API
}); 

//What are Promises?
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more readable and manageable way, avoiding callback hell. A Promise can be in one of three states: pending, fulfilled, or rejected.
//Example of a Promise: 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched from API";
            resolve(data);
        }, 2000);
    });
}
fetchData()
    .then((result) => {
        console.log(result); // Output: Data fetched from API
    })
    .catch((error) => {
        console.error(error);
    });

//What is Async/Await?
//Async/Await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner. The async keyword is used to declare an asynchronous function, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.
//Example of Async/Await:
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched from API";
            resolve(data);
        }, 2000);
    });     
}
async function getData() {
    try {
        const result = await fetchData();
        console.log(result); // Output: Data fetched from API
    } catch (error) {
        console.error(error);
    }
}
getData();  

