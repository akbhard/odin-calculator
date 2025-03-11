let numberOne = ""
let numberTwo = ""
let numbers = [numberOne, numberTwo]
let operator = []
let step = 0

// In order to get the numbers, based on some youtube video, I should use an operator on click for both getNumber and getOperator.
// And then push that into the operate function itself.

const getNumber = (number) => {
    if (step === 0) {
        number = number.toString()
        numberOne += number
        numbers[0] = Number(numberOne)
    } if (step === 1) {
        number = number.toString()
        numberTwo += number
        numbers[1] = Number(numberTwo)
    }
    return numbers
}

const getOperator = (op) => {
    step += 1
    return operator = op
}

const operate = () => {
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

const clear = () => {
    numberOne = ""
    numberTwo = ""
    numbers = []
    step = 0
    operator = []
}

// getNumber(9)
// getNumber(7)
// getOperator("/")
// getNumber(1)
// console.log(numbers)
// console.log(operate())
// clear()
// console.log(numbers)
// console.log(step)
// getNumber(4)
// getNumber(2)
// getNumber(2)
// getOperator("*")
// getNumber(3)
// console.log(numbers)
// console.log(operate())