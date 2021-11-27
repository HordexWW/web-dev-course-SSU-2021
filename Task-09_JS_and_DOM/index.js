function startEliminationGame(n, step) {
    const digits = Array.from({length: n}, (_, i) => i + 1)
    let counterEveryN = 0;
    let elementCounter = 0;
    while (digits.length != 1) {
        while (elementCounter < digits.length) {
            if (counterEveryN != step - 1) {
                elementCounter++
                counterEveryN++
            } else {
                let elementToDelete = digits[elementCounter];
                digits.splice(elementCounter, 1);
                counterEveryN = 0;
                if (digits.length == 1) {
                    break
                }
            }
        }
        elementCounter = 0;
    }
    return digits[0];
}

const convertToBinary = function (input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let s = "0".concat(input[i].charCodeAt(0).toString(2));
        output += s + " ";
    }
    return output;
};

function generateFormula(n) {
    if (typeof n != 'number' || !Number.isInteger(n) || n < -200 || n > 200) {
        return 'Invalid input'
    }

    let isNegative = false

    if (n < 0) {
        isNegative = true
        n = Math.abs(n)
    }
    let result = ''
    if (n == 0) {
        result = '1'
    } else {
        {
            for (var i = 0; i <= n; i++) {
                var multiplier = factorial(BigInt(n)) / (factorial(BigInt(n - i)) * factorial(BigInt(n) - BigInt(n - i)));
                if (multiplier == 1) {
                    multiplier = ''
                } else result += String(multiplier);

                if (n - i == 1) {
                    result += 'a';
                }
                if (n - i > 1) {
                    result += 'a' + '^' + (n - i);
                }
                if (i == 1) {
                    result += 'b';
                }
                if (i > 1) {
                    result += 'b' + '^' + (i);
                }
                if (i != n) {
                    result += ' + ';
                }
            }
        }
    }
    return isNegative ? '1 / (' + result + ')' : result;
}

function factorial(n) {
    return n ? n * factorial(n - 1n) : 1n;
}

var BINARY_RESULT = document.querySelector(".binary-result");
var DEGREE_RESULT = document.querySelector(".degree-result");
var ELEMINATE_RESULT = document.querySelector(".eleminate-result");
var BINARY_INPUT = document.getElementById("binary-input");
var DEGREE_INPUT = document.getElementById("degree-input");
var ELEMINATE_INPUT_N = document.getElementById("eleminate-input-N");
var ELEMINATE_INPUT_M = document.getElementById("eleminate-input-M");


document.querySelector(".binary-clearButton").onclick = () => {
    BINARY_INPUT.value = "";
    BINARY_RESULT.textContent = " ";
}


document.querySelector(".eleminate-clearButton").onclick = () => {
    ELEMINATE_INPUT_N.value = "";
    ELEMINATE_INPUT_M.value = "";
    ELEMINATE_RESULT.textContent = " ";
}

document.querySelector(".degree-clearButton").onclick = (event) => {
    event.preventDefault();
    DEGREE_INPUT.value = "";
    DEGREE_RESULT.textContent = " ";
}

document.querySelector(".binary-button").onclick = () => BINARY_RESULT.textContent = convertToBinary(BINARY_INPUT.value);

document.querySelector(".degree-button").onclick = (event) => {
    event.preventDefault();
    DEGREE_RESULT.textContent = generateFormula(parseInt(DEGREE_INPUT.value));
}
document.querySelector(".eleminate-button").onclick = () => ELEMINATE_RESULT.textContent = `Победил игрок под номером 
    ${startEliminationGame(parseInt(ELEMINATE_INPUT_N.value), parseInt(ELEMINATE_INPUT_M.value))}`;