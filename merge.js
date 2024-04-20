const merge = (array, start, mid, end) => {
  let a = [],
    b = [],
    c = [];

  let d = 0,
    e = 0;

  for (let i = 0; i < end; i++) {
    if (i <= mid) {
      a[d++] = array[i]
    }

    if (i > mid) {
      b[e++] = array[i]
    }
  }

  let i = 0,
    j = 0,
    k = 0;

  while (i <= mid && j <= end) {
    if (a[i] > b[j]) {
      c[k++] = b[j++]
    } else {
      c[k++] = a[i++]
    }
  }

  return c
};

let arr = [3, 5, 7, 8, 1, 2, 4, 9]; // [1 2 3 4 5 7 8 9]

console.log(merge(arr, 0, (arr.length / 2) - 1, arr.length))
