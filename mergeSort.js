/**
 * Pseudocode
 * sort half left 
 * sort half right
 * merge halves
 */

const first = [3, 2, 1, 13, 8, 5, 0, 1]; //  [0, 1, 1, 2, 3, 5, 8, 13]
const second = [105, 79, 100, 110] // [79, 100, 105, 110]

const merge = (A, B, C = []) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (k !== A.length + B.length) {

    if (A[i] > B[j]) {
      C[k] = B[j];
      k++;
      j++;
    } else {
      C[k] = A[i];
      k++;
      i++;
    }

    if (A[i] === undefined && B[j] !== undefined) {
      C[k] = B[j];
      k++;
      j++;
    }
  }

  return C;
};

console.log(merge([1], [2],  output = []));
