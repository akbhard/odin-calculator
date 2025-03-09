let numberOne = 9
let numberTwo = 3
let operator = "*"

const operate = function (numberOne, numberTwo, operator) {
    if (operator === "+") {
        return numberOne + numberTwo
    } else if (operator === "-") {
        return numberOne - numberTwo
    } else if (operator === "*") {
        return numberOne * numberTwo
    } else if (operator === "/") {
        return numberOne/numberTwo
    }
}

console.log(operate(numberOne, numberTwo, operator))