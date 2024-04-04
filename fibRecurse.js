function fibRecursive(n, arr = [0, 1]) {
  if (n <= 0) {
    arr.pop();
    arr.pop();
    return arr;
  }

  if (n === 1) {
    arr.pop();
    return arr;
  }

  if (n <= 2) return arr;

  arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];

  fibRecursive(n - 1, arr)

  return arr;
};

console.log(fibRecursive(8), fibRecursive(0), fibRecursive(1), fibRecursive(-12), fibRecursive(25))
