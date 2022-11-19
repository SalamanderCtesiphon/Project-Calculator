//variable and array declarations
let a = 0;
let b = 0;
let c = 0;
let operation = '';
let firstArray = [];

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
                if (button.value === '0' && firstArray.length === 0) {
                    return;
                } else {
                firstArray.push(button.value);
                current.textContent = firstArray.join('');
                return firstArray;
                }
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
                if (operation === '') {
                    memory.textContent = firstArray.join('');
                    return;
                } else {
                    firstArray.join('');
                b = Number(firstArray.join(''));
                c = operate(operation, a, b);
                memory.textContent = a + operation + b + "="; 
                current.textContent = c;  
                a = 0;
                b = 0;
                firstArray.length = 0; 
                // take c and split it into an array
                let cArray = c.toString().split('');
                // loop through the array and push each number into the firstArray
                for (let i = 0; i < cArray.length; i++) {
                    firstArray.push(cArray[i]);
                }
                operation = '';
                c = 0; 
                console.log(firstArray); 
            }
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
                firstArray.length = 0;
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
                if (firstArray.length === 0) {
                    current.textContent = '0';
                    return;
                } else {
                    firstArray.pop();
                    current.textContent = firstArray.join('');
                    if (firstArray.length === 0) {
                        current.textContent = '0';
                    }
                }
                
            }
        });
    });
}

// a function that listens for the decimal button to be clicked. on click it adds a decimal to the display
function decimal() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('decimal')) {
                if (firstArray.length === 0) {
                    firstArray.push('0', '.');
                    current.textContent = firstArray.join('');
                } else {
                firstArray.push(button.value);
                current.textContent = firstArray.join('');
                }
            }
        });
    });
}

// set the maximum number of digits to 16

function maxDigits() {
    if (firstArray.length > 16) {
        firstArray.length = 16;
        current.textContent = firstArray.join('');
    }
}


// function calls
populateDisplay();
operator();
equals();
clear();
backspace();
decimal();
maxDigits();