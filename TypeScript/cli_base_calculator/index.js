"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number:\n");
    var operator = (0, readline_sync_1.question)("Enter the operator: (+,-,/,*)\n");
    var secondStr = (0, readline_sync_1.question)("Enter the second number: \n");
    var validInput = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validInput) {
        console.log("Is valid ");
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        calculate(firstNum, operator, secondNum);
    }
    else {
        console.log("\nInvalid Input\n");
        main();
    }
}
function calculate(num1, op, num2) {
    switch (op) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var parsedStr = parseInt(str);
    var isNum = !isNaN(parsedStr);
    return isNum;
}
main();
