const foo = function () {
    const outputField = document.getElementById("result");
    const inputField = document.getElementById("text_input");
    let input = inputField.value;
    outputField.textContent = "";
    for (let i = 0; i < input.length; i++) {
        let s = "0".concat(input[i].charCodeAt(0).toString(2));
        outputField.textContent += s + " ";

    }
};


