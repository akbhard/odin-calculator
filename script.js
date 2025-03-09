let numbers = []
let operator = "/"

const operate = function (numbers, operator) {
    if (operator === "+") {
        return (numbers[0] + numbers[1]).toFixed(2)
    } else if (operator === "-") {
        return (numbers[0] - numbers[1]).toFixed(2)
    } else if (operator === "*") {
        return (numbers[0] * numbers[1]).toFixed(2)
    } else if (operator === "/") {
        return (numbers[0]/numbers[1]).toFixed(2)
    }
}

console.log(operate(numbers, operator))