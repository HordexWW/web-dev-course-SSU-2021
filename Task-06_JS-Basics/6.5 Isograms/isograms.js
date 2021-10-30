const wordIsIsogram = function () {
    const outputField = document.getElementById("result");
    const inputField = document.getElementById("text_input");
    let input = inputField.value;

    const chars = new Set(input.toLowerCase());
    outputField.textContent = (chars.size === input.length).toString();

}
