function startEliminationGame(n, step) {
    let list = [];
    for (let i = 0; i < n; i++) {
        list[i] = i + 1;
    }

    for (let newStep = 1; list.length > 1; newStep++) {
        let cur = list.shift();
        if (!(newStep % step == 0)) {
            list.push(cur);
        } else {
            newStep = 0;
        }
    }
    return list[0];
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
        return 'Invalid input';
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

let BINARY_CONVERTER_RESULT = document.querySelector(".binary-converter-result");
let FORMULA_GENERATOR_RESULT = document.querySelector(".formula-generator-result");
let ELIMINTION_GAME_RESULT = document.querySelector(".elimination-game-result");
let BINARY_CONVERTER_INPUT = document.getElementById("binary-converter-input");
let FORMULA_GENERATOR_INPUT = document.getElementById("formula-generator-input");
let ELIMINATION_GAME_INPUT_N = document.getElementById("elimination-game-input-n");
let ELIMINATION_GAME_INPUT_STEP = document.getElementById("elimination-game-input-step");


document.querySelector(".binary-converter-clear-button").onclick = () => {
    BINARY_CONVERTER_INPUT.value = "";
    BINARY_CONVERTER_RESULT.textContent = " ";
}


document.querySelector(".elimination-game-clear-button").onclick = () => {
    ELIMINATION_GAME_INPUT_N.value = "";
    ELIMINATION_GAME_INPUT_STEP.value = "";
    ELIMINTION_GAME_RESULT.textContent = " ";
}

document.querySelector(".formula-generator-clear-button").onclick = (event) => {
    event.preventDefault();
    FORMULA_GENERATOR_INPUT.value = "";
    FORMULA_GENERATOR_RESULT.textContent = " ";
}

document.querySelector(".binary-converter-execute-button").onclick =
    () => BINARY_CONVERTER_RESULT.textContent = convertToBinary(BINARY_CONVERTER_INPUT.value);

document.querySelector(".formula-generator-execute-button").onclick = (event) => {
    event.preventDefault();
    FORMULA_GENERATOR_RESULT.textContent = generateFormula(parseInt(FORMULA_GENERATOR_INPUT.value));
}
document.querySelector(".elimination-game-execute-button").onclick = () => {
    if (ELIMINATION_GAME_INPUT_N.value == "" || ELIMINATION_GAME_INPUT_STEP.value == "") {
        ELIMINTION_GAME_RESULT.textContent = "Invalid input";
    } else {
        ELIMINTION_GAME_RESULT.textContent = `Победил игрок под номером 
    ${startEliminationGame(parseInt(ELIMINATION_GAME_INPUT_N.value), parseInt(ELIMINATION_GAME_INPUT_STEP.value))}`;
    }
}

