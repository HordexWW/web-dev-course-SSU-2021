function myfun(a, b, text) {
    if (typeof a != "number" || typeof b != "number" || !Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
        return 'The first and second arguments must be a positive integer!';
    }

    let table = ""

    for (let i = 0; i < a; i++) {
        table += generateHorizontalTableBorder(b)
        let textPart = text.substring(i * b, i * b + 4)
        table += generateMiddlePartOfRow(textPart, b)
    }
    table += generateHorizontalTableBorder(b)
    return table;
}

function createMiddleCellSection(char) {
    return "| " + char + " "
}

function generateHorizontalTableBorder(cols) {
    let horizontalCellBorder = "+---"
    return horizontalCellBorder.repeat(cols) + "+\n"
}

function generateMiddlePartOfRow(textPart, cols) {
    let middlePart = ""
    let textPartLength = textPart.length
    if (textPartLength < cols) {
        for (let i = 0; i < textPartLength; i++) {
            middlePart += createMiddleCellSection(textPart.charAt(i))
        }
        for (let i = 0; i < cols - textPartLength; i++) {
            middlePart += createMiddleCellSection(" ")
        }
    } else {
        for (let i = 0; i < cols; i++) {
            middlePart += createMiddleCellSection(textPart.charAt(i))
        }
    }
    middlePart += "|\n"
    return middlePart
}

console.log(myfun(4, 4, "Hello World!"));
console.log(myfun(4, 3, "Nice pattern"));
console.log(myfun(3, 4, "Nice pattern"));
console.log(myfun(4, 4, ""));
console.log(myfun(-3, 4, "Nice pattern"));
console.log(myfun(3, -4, "Nice pattern"));
console.log(myfun(3.5, 4, "Nice pattern"));