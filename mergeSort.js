const merge = (array, start, mid, end) => {
  let n1 = mid - start + 1; 
  let n2 = end - mid;

  let a = [n1],
    b = [n2];

  for (let i = 0; i < n1; i++) {
      a[i] = array[start + i]
  }
  for (let i = 0; i < n2; i++) {
      b[i] = array[mid + 1 + i]
  }


  let i, j, k;
  i = 0;
  j = 0;
  k = start;

  while (i < n1 && j < n2) {
    if (a[i] >= b[j]) {
      array[k++] = b[j++]
    } else {
      array[k++] = a[i++]
    }
  }

  while (i < n1) {
    array[k++] = a[i++]
  }

  while (j < n2) {
    array[k++] = b[j++]
  }

  return array
};

const mergeSort = (array, start, end, center) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);

    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end)

    merge(array, start, mid, end)
  }

  return array;
};


let arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr2 = [79, 100, 105, 110];

console.log(mergeSort(arr1, 0, arr1.length - 1), mergeSort(arr2, 0, arr2.length - 1)); 
