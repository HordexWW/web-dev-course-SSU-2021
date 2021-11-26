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

var BINARY_RESULT = document.querySelector(".binary-result");
var ELEMINATE_RESULT = document.querySelector(".eleminate-result");
var BINARY_INPUT = document.getElementById("binary-input");
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

document.querySelector(".binary-button").onclick = () => BINARY_RESULT.textContent = convertToBinary(BINARY_INPUT.value);

document.querySelector(".eleminate-button").onclick = () => ELEMINATE_RESULT.textContent = `Победил игрок под номером 
    ${startEliminationGame(parseInt(ELEMINATE_INPUT_N.value), parseInt(ELEMINATE_INPUT_M.value))}`;