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
    console.log(numbers)
}

const getOperator = (op) => {
    step += 1
    return operator = op
}

const operate = () => {
    if (operator === "+") {
        sum = (numbers[0] + numbers[1]).toFixed(2)
    } else if (operator === "-") {
        sum = (numbers[0] - numbers[1]).toFixed(2)
    } else if (operator === "*") {
        sum = (numbers[0] * numbers[1]).toFixed(2)
    } else if (operator === "/") {
        sum = (numbers[0]/numbers[1]).toFixed(2)
    }
    return sum
}

const clear = () => {
    numberOne = ""
    numberTwo = ""
    numbers[0] = 0
    numbers[1] = 0
    step = 0
    operator = ""
}

const clearButtonClicked = () => {
    clear();
    // console.log(`Numbers: ${numbers}`);
    // console.log(`Step is: ${step}`) 
}