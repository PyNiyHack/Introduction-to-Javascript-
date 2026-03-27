//What is DOM?
//DOM stands for Document Object Model.
//It is a programming interface for web documents. 
//It represents the structure of a document as a tree of objects,
//where each object corresponds to a part of the document (such as an element, attribute, or text). 
//The DOM allows developers to manipulate the content, structure, and style of a web page dynamically using JavaScript. 
//It provides methods and properties to access and modify the elements of a web page, 
//enabling interactive and dynamic web applications. 
 
//DOM Manipulation
//DOM manipulation refers to the process of using JavaScript to interact with and modify the elements of a web page. 
//This can include tasks such as adding, removing, or changing elements, attributes, and styles.
//Here are some common DOM manipulation techniques:

//1. Selecting Elements
//You can select elements using various methods such as getElementById, getElementsByClassName, querySelector, etc.
const element = document.getElementById('myElement');
const elements = document.getElementsByClassName('myClass');
const firstElement = document.querySelector('.myClass');

//2. Modifying Content
//You can change the content of an element using innerHTML, textContent, or value properties.
element.innerHTML = 'New content';
element.textContent = 'New text';
element.value = 'New value';    

//3. Changing Styles
//You can modify the styles of an element using the style property.
element.style.color = 'red';
element.style.backgroundColor = 'blue'; 

//4. Adding and Removing Elements
//You can create new elements and append them to the DOM, or remove existing elements.
const newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
document.body.appendChild(newElement); // Adds the new element to the end of the body

const parentElement = document.getElementById('parent')
const childElement = document.getElementById('child');
parentElement.removeChild(childElement); // Removes the child element from the parent       

//5. Event Handling
//You can add event listeners to elements to respond to user interactions.
element.addEventListener('click', function() {
    alert('Element clicked!');
}); 
//These are just a few examples of DOM manipulation techniques.
//The DOM provides a wide range of methods and properties that allow you to create dynamic and interactive web pages.       

//Window Object
//The window object is the global object in a web browser environment. 
//It represents the browser window and provides properties and methods to interact with it. 
//The window object is the top-level object in the JavaScript hierarchy and serves as the global scope for JavaScript code running in a web page. 
//It allows you to access and manipulate various aspects of the browser, such as the document, location, history, and more.

