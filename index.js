//variable and array declarations
let a = 0;
let b = 0;
let c = 0;
let operation = '';
let nextOperation = '';
let firstArray = [];
let secondArray = [];

const buttons = document.querySelectorAll('button');
const memory = document.querySelector('.memory');
const current = document.querySelector('.current');

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
function operate(operation, a, b) {
    if (operation === '+') {
        return add(a, b);
    } else if (operation === '-') {
        return subtract(a, b);
    } else if (operation === '*') {
        return multiply(a, b);
    } else if (operation === '/') {
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
                return firstArray;
            }
        });
    });
}

/* listen for operator button to be pressed and stores the operation and the number for latter use*/
function operator() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                if (a === 0) {
                    operation = button.value;
                    firstArray.join('');
                    a = Number(firstArray.join(''));
                    memory.textContent = a + ' ' + ' ' + operation;
                    current.textContent = '0';
                    firstArray.length = 0;
                } else {
                    firstArray.join('');
                    b = Number(firstArray.join(''));
                    c = operate(operation, a, b);
                    memory.textContent = a + '' + '' + operation + '' + '' + b +"" + "=";
                    current.textContent = c;
                    a = c;
                    operation = button.value;
                    firstArray.length = 0;
                }
                
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
                memory.textContent = a + operation + b + "="; 
                current.textContent = c;  
                a = 0;
                b = 0;
                firstArray.length = 0; 
                firstArray.push(c);
                operation = '';
                c = 0;                   
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
                a = 0;
                b = 0;
                c = 0;
                operation = '';
                nextOperation = '';
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

// function calls
populateDisplay();
operator();
equals();
clear();
backspace();
decimal();
