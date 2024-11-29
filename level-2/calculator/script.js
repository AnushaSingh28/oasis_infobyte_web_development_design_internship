let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    if (isFinite(key)) {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === 'Backspace') {
        deleteNumber();
    } else if (key === 'Enter' || key === '=') {
        compute();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (['+', '-', '*', '/', '%', '^'].includes(key)) {
        chooseOperation(key);
    } else if (key === '(' || key === ')') {
        appendNumber(key);
    }
}

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDecimal() {
    if (currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + '.';
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        case '^':
            computation = Math.pow(prev, current);
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function computeSquareRoot() {
    if (currentOperand === '') return;
    currentOperand = Math.sqrt(parseFloat(currentOperand));
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function allClear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = `${previousOperand} ${operation || ''} ${currentOperand}`;
}
