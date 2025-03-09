let numbers = [42,7]
let operator = "/"

// In order to get the numbers, based on some youtube video, I should use an operator on click for both getNumber and getOperator.
// And then push that into the operate function itself.

const operate = (numbers, operator) => {
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