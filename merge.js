let first = [0, 2, -5, 3, 10, 12, 9, 11]; 

const merge = (array, start, mid, end) => {

  let fArr = [];
  let sArr = [];

  let center = mid;
 
  let j = 0;
  let k = 0;

  // add to fArr and sArr
  for (let i = start; i < end; i++) {
    let element = array[i];

    if (i < mid) {
      fArr[k] = element;
      k++
    }

    if (i > mid - 1) {
      sArr[j] = element;
      j++
    }
  }

  // initialize index array for sorting
  let l = 0,
    m = 0,
    n = 0;

  let arr = [];
  console.log(fArr, sArr)

  for (let i = 0; i < fArr.length + sArr.length; i++) {
    if (fArr[l] < sArr[m]) {
      arr[n++] = fArr[l++];
    } else {
      arr[n++] = sArr[m++];
    }
  }

  for (; n < fArr.length; n++) {
    arr[n] = fArr[l++];
  }

  for (; n < sArr.length; n++) {
    arr[n] = sArr[m++]
  }

  array.splice(start, end, ...arr);

  return { array }
};

const mergin = merge(first, 0, 4, 8);

console.log(mergin.array);
