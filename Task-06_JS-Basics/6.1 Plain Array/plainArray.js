const foo = function (array) {
    let result = new Array();

    for (let i = 0; i < array.length; i++) {
        let a = array[i];
        for (let j = 0; j < a.length; j++) {
            result.push(a[j]);
        }
    }

    result = result.sort(function (a, b) {
        return a - b;
    });

    return result;
}


const array1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
const array2 = [];
const array3 = [[], []];
const array4 = [[], [1]];
const array5 = [[1, 3, 5], [-100], [2, 4, 6]] ;


console.log("Case 1: ");
console.log(foo(array1));
console.log("Case 2: ");
console.log(foo(array2));
console.log("Case 3: ");
console.log(foo(array3));
console.log("Case 4: ");
console.log(foo(array4));
console.log("Case 5: ");
console.log(foo(array5));