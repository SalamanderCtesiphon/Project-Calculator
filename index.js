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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            display.textContent += button.textContent;
        } else if (button.classList.contains('operator')) {
            display.textContent += button.textContent;
        } else if (button.classList.contains('decimal')) {
            display.textContent += button.textContent;
        } else if (button.classList.contains('clear')) {
            display.textContent = '';
        } else if (button.classList.contains('equals')) {
            display.textContent = operate(display.textContent);
        }
    });
}




