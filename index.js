//variable and array declarations
let a = 0;
let b = 0;
let c = 0;
let operation = '';
let firstArray = [];

const buttons = document.querySelectorAll('button');
const memory = document.querySelector('.memory');
const current = document.querySelector('.current');

memory.textContent = 'ready...';

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
                if (firstArray.length > 15) {
                    firstArray.pop();
                    current.textContent = firstArray.join('');
                } else {
                    if (button.value === '0' && firstArray.length === 0) {
                        return;
                    } else {
                    firstArray.push(button.value);
                    current.textContent = firstArray.join('');
                    return firstArray;
                    }
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
                    a = Number(firstArray.join(''));
                    memory.textContent = a + ' ' + ' ' + operation;
                    current.textContent = '0';
                    firstArray.length = 0;
                } else {
                    firstArray.join('');
                    b = Number(firstArray.join(''));
                    if (b === 0 && operation === '/') {
                        memory.textContent = ' ERROR!! division by zero';
                        current.textContent = '0';
                        a = 0;
                        b = 0;
                        c = 0;
                        operation = '';
                        firstArray.length = 0;
                    } else {
                        c = operate(operation, a, b);
                        //round answer to 15 digits total displayed
                        c = c.toFixed(15);

                        //cut off trailing zeros
                        c = Number(c);
                        memory.textContent = a + ' ' + ' ' + operation + ' ' + ' ' + b + ''  +  '=';
                        current.textContent = c;
                        a = c;
                        operation = button.value;
                        firstArray.length = 0;
                        memory.textContent = a + ' ' + ' ' + operation;
                    }
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
                    return;
                } else {
                    firstArray.join('');
                    b = Number(firstArray.join(''));
                    if (b === 0 && operation === '/') {
                        memory.textContent = ' ERROR!! division by zero';
                        current.textContent = '0'
                        a = 0;
                        b = 0;
                        c = 0;
                        operation = '';
                        firstArray.length = 0;
                    } else {
                        c = operate(operation, a, b);
                        //round answer to 10 decimal places
                        c = c.toFixed(15);
                        //cut off trailing zeros
                        c = Number(c);
                        memory.textContent = a + ' '  + operation + ' '  + b + " " + "="; 
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
                    }
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
                memory.textContent = 'ready...';
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
                if (firstArray.includes('.')) {
                    return;
                } else {
                    if (firstArray.length === 0) {
                        firstArray.push('0', '.');
                        current.textContent = firstArray.join('');
                    } else {
                    firstArray.push(button.value);
                    current.textContent = firstArray.join('');
                    }
                }
                
            }
        });
    });
}

// limit the number of characters that can be displayed on the screen





// function calls

populateDisplay();
operator();
equals();
clear();
backspace();
decimal();
