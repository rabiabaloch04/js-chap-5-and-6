//5.1
let maxValue = 5;
let solution = Math.floor(Math.random() * maxValue) + 1;
console.log(`Solution: ${solution}`);
let isCorrect = false;
while (!isCorrect) {
    let userGuess = prompt(`Enter a number between 1 and ${maxValue}:`);
    userGuess = Number(userGuess);
    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log(userGuess > solution ? "Too high. Try again!" : "Too low. Try again!");
    }
}

//5.2
let counter = 0;
const step = 10;
do {
    console.log(`Counter: ${counter}`);
    counter += step;
} while (counter < 100);

//5.3
const myWork = [];
for (let i = 1; i <= 10; i++) {
    const lessonName = `Lesson ${i}`;
    const isRunningThisYear = i % 2 === 0; 
    const lessonObject = { name: lessonName, status: isRunningThisYear };
    myWork.push(lessonObject);
}
console.log(myWork);

//5.4
const myTable = [];
const numRows = 3;
const numColumns = 4;
let counter1 = 0;
for (let row = 0; row < numRows; row++) {
    const tempTable = [];

    for (let column = 0; column < numColumns; column++) {
        tempTable.push(counter);
        counter1++;
    }
    myTable.push(tempTable);
}
console.log(myTable);

//5.5
const grid = [];
const numCells = 64;
let counter2 = 0;
let row = [];
for (let i = 0; i <= numCells; i++) {
    if (counter2 % 8 === 0) {
        if (row !== undefined) {
            grid.push(row);
        }
        row = [];
    }
    counter2++;
    const tempValue = counter2;
    if (counter2 % 8 === 0) {
        grid.push(row);
    }
    row.push(tempValue);
}
console.log(grid);

//5.6
const myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}
console.log("Array:", myArray);
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("Using for of loop:");
for (const value of myArray) {
    console.log(value);
}

//5.7
const myObject = {
    item1: "Apple",
    item2: "Banana",
    item3: "Orange"
};
console.log("Object:");
for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject[key]}`);
    }
}
const myArray1 = ["Apple", "Banana", "Orange"];
console.log("Array:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray1[i]);
}

5.8
let outputString = '';
const skipNumber = 5;
for (let i = 0; i < 10; i++) {
    if (i === skipNumber) {
        continue;
    }
    outputString += i;
}
console.log("Using continue:", outputString);
outputString = '';
for (let i = 0; i < 10; i++) {
    if (i === skipNumber) {
        break;
    }
    outputString += i;
}
console.log("Using break:", outputString);

//chapter project
let multiplicationTable = [];
const maxValue1 = 10;
for (let i = 1; i <= maxValue1; i++) {
    let row = [];
    for (let j = 1; j <= maxValue1; j++) {
        row.push(i * j);
    }
    multiplicationTable.push(row);
}
console.log("Multiplication Table:");
for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i].join("\t"));
}

//6.1
function addNumbers(num1, num2) {
    return num1 + num2;
}
let value1 = 5;
let value2 = 7;
let result1 = addNumbers(value1, value2);
console.log(`Result 1: ${value1} + ${value2} = ${result1}`);
let result2 = addNumbers(10, 20);
console.log(`Result 2: 10 + 20 = ${result2}`);

//6.2
const descriptiveWords = ['Awesome', 'Fantastic', 'Amazing', 'Incredible', 'Superb'];
function describeName() {
    let userName = prompt('Enter a name:');
    let randomDescription = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
    console.log(`Description for ${userName}: ${randomDescription}`);
}
describeName();

//6.3
function calculate(num1, num2, operator = 'add') {
    if (operator === 'add') {
        return num1 + num2;
    } else if (operator === 'subtract') {
        return num1 - num2;
    } else {
        console.log('Invalid operator. Defaulting to addition.');
        return num1 + num2;
    }
}
let operand1 = 10;
let operand2 = 5;
let resultAdd = calculate(operand1, operand2);
console.log(`${operand1} + ${operand2} = ${resultAdd}`);
let resultSubtract = calculate(operand1, operand2, 'subtract');
console.log(`${operand1} - ${operand2} = ${resultSubtract}`);
let updatedResultAdd = calculate(operand1, operand2, 'add');
console.log(`Updated: ${operand1} + ${operand2} = ${updatedResultAdd}`);

//6.4
function calculateAndReturn(num1, num2) {
    return num1 + num2;
}
let resultsArray = [];
for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    let result = calculateAndReturn(value1, value2);
    resultsArray.push(result);
}
console.log(resultsArray);

//6.5
let value = "1000";
(function() {
    let value = "Local Value from IIFE";
    console.log("Local Value inside IIFE:", value);
})();
let result = (function() {
    let value = "Local Value from IIFE Expression";
    return value;
})();
console.log("Result from IIFE Expression:", result);
(function(param) {
    let value = "Local Value from Anonymous Function: " + param;
    console.log(value);
})("Parameter Value");

//6.6
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example
let resultt = factorial(5);
console.log("Factorial of 5:", resultt);

//6.8
let myFunctionExpression = function (parameter) {
    console.log("Function Expression:", parameter);
};
myFunctionExpression("Hello from Function Expression");
function myFunctionDeclaration(parameter) {
    console.log("Function Declaration:", parameter);
}
myFunctionDeclaration("Hello from Function Declaration");

//chapter projects
function countUpToTen(currentNumber) {
    if (currentNumber > 10) {
        return;
    }
    console.log(currentNumber);
    countUpToTen(currentNumber + 1);
}
countUpToTen(1); 
countUpToTen(5); 
countUpToTen(8); 

