Step 1:Building a calculator for online game.

// 1. Absolute Value
function absoluteValue(num) {
    return Math.abs(num);
}

// 2. Power Calculation
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// 3. Square Root
function squareRoot(num) {
    return Math.sqrt(num);
}

// 4. Maximum and Minimum
function findMaxMin(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}

// 5. Random Number Generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6. Custom Rounding
function customRound(num, decimals) {
    return Number(num.toFixed(decimals));
}

Step 2:Task arranging step by step

function calculator() {
    let choice = prompt(`Select an operation:
1. Absolute Value
2. Power
3. Square Root
4. Max & Min
5. Random Number
6. Custom Rounding`);

    switch (choice) {
        case "1":
            let num1 = parseFloat(prompt("Enter a number:"));
            alert("Absolute value: " + absoluteValue(num1));
            break;

        case "2":
            let base = parseFloat(prompt("Enter base:"));
            let exponent = parseFloat(prompt("Enter exponent:"));
            alert(`${base} ^ ${exponent} = ` + power(base, exponent));
            break;

        case "3":
            let num2 = parseFloat(prompt("Enter a number:"));
            alert("Square root: " + squareRoot(num2));
            break;

        case "4":
            let arr = prompt("Enter numbers separated by commas:").split(",").map(Number);
            let result = findMaxMin(arr);
            alert(`Max: ${result.max}, Min: ${result.min}`);
            break;

        case "5":
            let min = parseFloat(prompt("Enter minimum:"));
            let max = parseFloat(prompt("Enter maximum:"));
            alert("Random number: " + randomNumber(min, max));
            break;

        case "6":
            let num3 = parseFloat(prompt("Enter a number:"));
            let decimals = parseInt(prompt("Enter decimal places:"));
            alert("Rounded value: " + customRound(num3, decimals));
            break;

        default:
            alert("Invalid choice!");
    }
}

calculator();

Outputs are:

Absolute Value of -45.67 is  45.67

5 to the power of 3 is  125

Square Root of 144 is  12

Max/Min of [3, 78, -12, 0.5, 27] is  Max: 78, Min: -12

Random number between 1 and 50 is  e.g., 27

Round 23.67891 to 2 decimals is  23.68
