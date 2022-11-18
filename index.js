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
// stores it in a variable.
let operation = '';

function operator() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                operation = button.value;
                firstArray.join('');
                firstArray.push(button.value);
                memory.textContent = firstArray.join('');
                a = Number(firstArray.slice(0, firstArray.length - 1).join(''));
                firstArray.length = 0;
                current.textContent = '0';
                console.log(a);
                console.log(operation);
            }
        });
    });
}

operator();

// a function that listens for the equals button to be clicked. on click it converts the array to a number and
// stores it in a variable. it then calls the operate function and passes the operator and the two numbers
// as arguments. it then displays the result on the screen.

function equals() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('equals')) {
                firstArray.join('');
                b = Number(firstArray.join(''));
                current.textContent = operate(operation, a, b);
                memory.textContent = '';
                console.log(b);
            }
        });
    });
}

equals();

// a function that listens for the clear button to be clicked. on click it clears the display and the memory

function clear() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear')) {
                firstArray.length = 0;
                secondArray.length = 0;
                current.textContent = '0';
                memory.textContent = '';
            }
        });
    });
}

clear();

// a function that listens for the backspace button to be clicked. on click it removes the last number from the display

function backspace() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('backspace')) {
                firstArray.pop();
                current.textContent = firstArray.join('');
            }
        });
    });
}

backspace();

// a function that listens for the decimal button to be clicked. on click it adds a decimal to the display

function decimal() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('decimal')) {
                firstArray.push(button.value);
                current.textContent = firstArray.join('');
            }
        });
    });
}

decimal();




