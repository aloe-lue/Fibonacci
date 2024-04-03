/**
 * fibLoop(0) // []
 * fibLoop(1) // [0]
 * fibLoop(2) // [0, 1]
 * fibLoop(8) // [0, 1, 1, 2, 3, 5, 8, 13]
 * fibLoop(9) // [0, 1, 1, 2, 3, 5, 8, 13, 21]
 */

const fibLoop = function getFibNThenReturnFibNSequence(n) {
    let arr = [0, 1];

    if (n === 1) return [0];
    if (n === 0) return [];

    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr;
};

console.log(
    fibLoop(0),
    '\n',
    fibLoop(1),
    '\n',
    fibLoop(2),
    '\n',    
    fibLoop(8),
    '\n',
    fibLoop(9),
);
