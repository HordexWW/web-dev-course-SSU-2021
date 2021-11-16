function formatPhoneNumber(numbers) {
    let pattern = "+7 (...) ...-..-.."
    let acceptable = [...Array(10).keys()];
    if (numbers.length != 10 ) {
        return "Invalid input";
    }
    for(var i = 0; i < numbers.length; i++) {
        if(acceptable.includes(numbers[i])) {
            pattern = pattern.replace(".", numbers[i]);
        } else {
            return 'Invalid input'
        }
    }
    return pattern;
}

console.log(formatPhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))
console.log(formatPhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))
console.log(formatPhoneNumber([]))
console.log(formatPhoneNumber("aw93fha="))
