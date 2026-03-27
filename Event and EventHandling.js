//What is Event?
//An event is an action or occurrence that happens in the browser, such as a user interaction (click, hover, keypress) or a system-generated event (page load, resize). 
//Events allow developers to create interactive web applications by responding to user actions and changes in the environment.
//Examples of events include:   
//1. Click Event: Triggered when a user clicks on an element.
//2. Mouseover Event: Triggered when a user hovers over an element.
//3. Keypress Event: Triggered when a user presses a key on the keyboard.
//4. Load Event: Triggered when a web page has finished loading.
//5. Resize Event: Triggered when the browser window is resized.

//Event Handling
//Event handling refers to the process of responding to events in a web application. 
//This is typically done by attaching event listeners to elements, which are functions that execute when a specific event occurs. 
//Event listeners can be added using the addEventListener method or by assigning a function to an event property of an element.
//Here are some examples of event handling: 
//1. Using addEventListener
const button = document.getElementById('myButton'); 
button.addEventListener('click', function() {
    alert('Button clicked!');
}); 
//2. Using Event Properties
const input = document.getElementById('myInput');   
input.onkeypress = function() {
    console.log('Key pressed: ' + event.key);
};  
//3. Removing Event Listeners
function handleClick() {
    alert('Button clicked!');
}
button.addEventListener('click', handleClick); // Add event listener
button.removeEventListener('click', handleClick); // Remove event listener
//Event handling is a crucial aspect of web development, as it allows developers to create responsive and interactive user interfaces. 
//By attaching event listeners to elements, you can define how your application should respond to user interactions and other events, enhancing the user experience.

