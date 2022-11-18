//variable and array declarations
let a = 0;
let b = 0;
let c = 0;
let operation = '';
const buttons = document.querySelectorAll('button');
const memory = document.querySelector('.memory');
const current = document.querySelector('.current');
const firstArray = [];
const secondArray = [];

// the math functions
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

/*preform the operation indicated*/
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

/* display the input to the screen*/
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

/* listen for operator button to be pressed and stores the operation and the number for latter use*/
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
            }
        });
    });
}

/* performs the stored operation on the two nunbers*/
function equals() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('equals')) {
                firstArray.join('');
                b = Number(firstArray.join(''));
                c = operate(operation, a, b);
                current.textContent = operate(operation, a, b);
                memory.textContent = c;
                
            }
        });
    });
}

/* a function that listens for the clear button to be clicked. 
on click it clears the display and the memory*/
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

/* a function that listens for the backspace button to be clicked.
 * on click it removes the last number from the display*/
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

populateDisplay();
operator();
equals();
clear();
backspace();
decimal();
