const formatString = function () {
    const outputField = document.getElementById("result");
    const inputField = document.getElementById("text_input");
    let input = inputField.value;

    let stringComponent = "";
    for (let i = 0; i < input.length; i++) {
        let currentChar = input.charAt(i);
        stringComponent += currentChar.toUpperCase() + currentChar.toLowerCase().repeat(i);
        if (i < input.length -1) {
            stringComponent += "-";
        }
    }
    outputField.textContent = stringComponent;
}