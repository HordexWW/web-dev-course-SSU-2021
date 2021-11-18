function zero(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 0);
    } else {
        return 0;
    }
}

function one(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 1);
    } else {
        return 1;
    }
}

function two(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 2);
    } else {
        return 2;
    }
}

function three(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 3);
    } else {
        return 3;
    }
}

function four(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 4);
    } else {
        return 4;
    }
}

function five(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 5);
    } else {
        return 5;
    }
}

function six(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 6);
    } else {
        return 6;
    }
}

function seven(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 7);
    } else {

        return 7;
    }
}

function eight(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 8);
    } else {
        return 8;
    }
}

function nine(expression) {
    if (typeof expression != "undefined") {
        return operation(expression[0], expression[1], 9);
    } else {
        return 9;
    }
}


function plus(num) {
    return [num, '+']
}

function minus(num) {
    return [num, '-']
}

function times(num) {
    return [num, '*']
}

function dividedBy(num) {
    return [num, '/']
}

function operation(y, op, x) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return Math.floor(x / y);
    }
}


console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
console.log(three(times(three(times(three())))));
console.log(two(plus(two(times(two(minus(one())))))));
console.log(zero(plus(one(dividedBy(one())))));
console.log(one(dividedBy(zero())));
console.log(one());