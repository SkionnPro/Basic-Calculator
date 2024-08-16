"use strict";
const display = document.querySelector('input');
const operators = ['*', '/', '+', '-'];
let flag = true;

function calculate() {
    try {
        const result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Invalid Expression";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Invalid Expression";
    }
    flag = true;
}

function updateCursor(){
    display.setSelectionRange(display.value.length, display.value.length+1);
}

function deleteLastChar() {
    display.value = display.value.toString().slice(0,-1);
}

function writeDecimal(){
    display.focus();
    flag = false;
    let currentValue = display.value;
    if(currentValue.includes('.')) return;
    display.value += '.';
    updateCursor();
}

function clearDisplay(){
    display.value = '';
}

function writeOperator(operator){
    display.focus();
    let currentValue = display.value;
    if(currentValue == '' && operator != '-') return;
    else if(operators.includes(currentValue[currentValue.length-1])) return;
    else if(currentValue[currentValue.length-1] == '.') return;
    else{
        display.value += operator;
        flag = false;
    }
    updateCursor();
}

function writeNumber(number) {
    display.focus();
    if(flag == true){    
        display.value = number;
        flag = false;
    }
    else display.value += number;
    updateCursor();
}