/**
 * build a function mergeSort that takes in an array and returns a sorted array,
 * using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1]
 * should return [0, 1, 1, 2, 3, 5, 8, 13]
 * and an input of [105, 79, 100, 110] should return 
 * [79, 100, 105, 110]
 *
 * tips
 * think about what base case is and what behavior is happening
 * again and again and can actually be delegated to someone else
 * (e.g. that same function!).
 *
 * it may be helpful to check out the background videos again if
 * you don't quite understand what should be going on.
 */


/**
 * Pseudocode
 * sort half left 
 * sort half right
 * merge halves
 */

const first = [3, 2, 1, 13, 8, 5, 0, 1]; //  [0, 1, 1, 2, 3, 5, 8, 13]
const second = [105, 79, 100, 110] // [79, 100, 105, 110]

const mergeSort = function mergeSort(array, left, right) {
  if (array.length <= 0) {
    return array;
  }

  let mid = array.length / 2;
  mergeSort(mid, left, right);
  mergeSort(mid + 1, left, right);
}
