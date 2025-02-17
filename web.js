// 1. Variables and Constants
let variableExample = "This is a variable"; // Declaring a variable
const constantExample = "This is a constant"; // Declaring a constant

// 2. Data Types
let stringExample = "Hello, World!"; // String
let numberExample = 42; // Number
let booleanExample = true; // Boolean
let nullExample = null; // Null
let undefinedExample; // Undefined
let objectExample = { key: "value" }; // Object
let arrayExample = [1, 2, 3, 4]; // Array

// 3. Functions
function exampleFunction(param) {
  // Function declaration
  return `Parameter received: ${param}`;
}

const arrowFunction = (param) => `Arrow Function received: ${param}`; // Arrow function

// 4. Control Structures
if (booleanExample) {
  console.log("Boolean is true");
} else {
  console.log("Boolean is false");
}

for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration: ${i}`);
}

let i = 0;
do {
  console.log(`Do-While loop iteration: ${i}`);
  i++;
} while (i < 3);

// 5. Objects and Classes
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
dog.speak();

// 6. Promises and Async/Await
function asyncExample() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1000);
  });
}

async function handleAsync() {
  const result = await asyncExample();
  console.log(result);
}
handleAsync();

// 7. DOM Manipulation
let newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM!";
document.body.appendChild(newDiv);

// 8. Events
newDiv.addEventListener("click", () => {
  alert("Div clicked!");
});

// 9. Error Handling
try {
  throw new Error("This is an error");
} catch (error) {
  console.error(error.message);
  // Ensure the error doesn't break subsequent code
  console.log("Continuing execution after handling error.");
}

// 10. Modules (ES6)
// Example: Assume this function is exported in another file as `export { exampleExport }`.
// Uncomment the below lines if moduleExample.js exists.
// import { exampleExport } from "./moduleExample.js";
// exampleExport();

// 11. JSON Handling
let jsonString = JSON.stringify(objectExample); // Convert object to JSON string
let parsedObject = JSON.parse(jsonString); // Parse JSON string to object

// 12. Math and Date
let randomNumber = Math.random(); // Generate random number
let currentDate = new Date(); // Get current date and time
console.log(`Random Number: ${randomNumber}, Current Date: ${currentDate}`);

// 13. Regular Expressions
let regex = /hello/i; // Regular expression to match "hello" (case-insensitive)
console.log(regex.test("Hello, World!"));

// 14. Callbacks
function exampleCallback(param, callback) {
  callback(`Callback executed with: ${param}`);
}

exampleCallback("Sample", console.log);

// 15. Iterators and Generators
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generatorFunction();
for (let value of generator) {
  console.log(value);
}

