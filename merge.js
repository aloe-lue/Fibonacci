let fArr = [2, 1, 0, 5, 3, 12, 10, 9]; 

const merge = (array, start, mid, end) => {

  let fArr = [];
  let sArr = [];

  let center = mid;
 
  let j = 0;
  let k = 0;

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

  return { fArr, sArr }
};


const mergin = merge(fArr, 4, 6, 8);

console.log(mergin.fArr, mergin.sArr);
