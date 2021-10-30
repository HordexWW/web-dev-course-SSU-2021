const countVowels =  function() {

    const outputField = document.getElementById("result");
    const inputField = document.getElementById("text_input");
    let input = inputField.value;


    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCounter = 0;
    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input.charAt(i))) {
            vowelsCounter++;
        }
    }
    outputField.textContent = vowelsCounter.toString();
}


