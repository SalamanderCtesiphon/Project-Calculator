let a = 0;
let b = 0;

function add() {
  return a + b;
}

function subtract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}

/* Create a new function operate that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers.*/

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

/* Create the functions that populate the display when you 
click the number buttons. You should be storing the 
‘display value’ in a variable somewhere for use 
in the next step. */

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

const firstArray = [];
const secondArray = [];

//creat a fuction that takes user and populates and array with the numbers diplays them on the screen

function populateDisplay() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                firstArray.push(button.value);
                display.textContent = firstArray.join('');
            }
        });
    });
}

populateDisplay();


/* Add an event listener to the operator buttons. 
that takes the array firstArray and stores it in a variable. and then logs the operation to be used later.*/

let operator = '';

function storeFirstArray() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                firstArray.push(button.value);
                operator = button.value;
                //convert the array to a string
                const firstString = firstArray.join('');
                //convert the string to a number
                a = parseInt(firstString);
                // clear the display
                display.textContent = '';
            }
        });
    });
}

storeFirstArray();


// create a function that listens for the second array and stores it in a variable

function storeSecondArray() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                secondArray.push(button.value);
                const secondString = secondArray.join('');
                b = parseInt(secondString);
                console.log(b);
            }
        });
    });
}

storeSecondArray();
