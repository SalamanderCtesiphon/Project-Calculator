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
const memory = document.querySelector('.memory');
const current = document.querySelector('.current');

const firstArray = [];
const secondArray = [];

//creat a fuction that takes user and populates and array with the numbers diplays them on the screen

function populateDisplay() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                firstArray.push(button.value);
                current.textContent = firstArray.join('');
            }
        });
    });
}

populateDisplay();

// a functin that listens for the operator button to be clicked. on click it converts the array to a number and
// stores it in a variable. displaying the number and the operator on the memory display and stores the operator in a variable

function operator() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                a = Number(firstArray.join(''));
                display.textContent = a + button.value;
                operator = button.value;
            }
        });
    });
}

operator();