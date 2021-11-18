const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
const digits = Array.from(Array(10).keys());
const maxLength = 20;
const minLength = 6;

function generatePassword() {
    let password = "";
    const length = generatePasswordLength();

    password += generateDigit().toString();
    password += generateCharacter().toLowerCase();
    password += generateCharacter().toUpperCase();

    for (let i = 3; i < length; i++) {
        let v = getRandomInt(2);
        if (v == 0) {
            password += generateCharacter();
        } else {
            password += generateDigit().toString();
        }
    }

    return shuffle(password);
}

function generateCharacter() {
    let v = getRandomInt(2);
    if (v == 0) {
        return alphabet[getRandomInt(alphabet.length)];
    } else {
        return alphabet[getRandomInt(alphabet.length)].toUpperCase();
    }
}

function generateDigit() {
    return digits[getRandomInt(digits.length)];
}

function generatePasswordLength() {
    return getRandomIntInRange(minLength, maxLength)
}

function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(string) {
    let a = string.split(""),
        n = a.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

console.log(generatePassword())
console.log(generatePassword())
console.log(generatePassword())
console.log(generatePassword())
