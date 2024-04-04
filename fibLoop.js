const fibLoop = function getFibNThenReturnFibNSequence(n) {
  let arr = [0, 1];

  if (n === 1) return [0];
  if (n <= 0) return [];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

console.log(
  fibLoop(-1),
  '\n',
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
