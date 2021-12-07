function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    if (b === 0) {
        alert('Cannot divide by 0!');
    }

    return a / b
}

function operate (operator, num1, num2) {
    return operator (num1, num2)
}

let display = 0;

const digButtons = document.querySelectorAll('.digit');
digButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display === 0) {
            display = "" + button.id
        } else {
            display = "" + display + button.id
        }
        
        // adjust text content of current display
        const currentDisplay = document.querySelector('#calcDisplay');
        currentDisplay.innerText = display;


    });
  });

let firstNumber = 0;
let selectedFunction = 'dummy';

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumber = display;
        display = 0;
        const currentDisplay = document.querySelector('#calcDisplay');
        currentDisplay.innerText = display;
        
        selectedFunction = button.id;
    });
  });

const operateButton = document.querySelector('#operate');
operateButton.addEventListener('click', () => {
    numberOne = parseInt(firstNumber)
    numberTwo = parseInt(display)

    display = window[selectedFunction](numberOne, numberTwo);
    const currentDisplay = document.querySelector('#calcDisplay');
    currentDisplay.innerText = display;

});


const clearButton = document.querySelector('#CLEAR');
clearButton.addEventListener('click', () => {
    display = 0;
    firstNumber = 0;
    selectedFunction = 'dummy';
    const currentDisplay = document.querySelector('#calcDisplay');
    currentDisplay.innerText = display;
});

