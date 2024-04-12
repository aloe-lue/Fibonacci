const mergeSort = () => {
    const merge = (array, left, mid, right) => {
        let tmp = array;

        let i = 0;
        let j = mid;
        let k = 0;

        while (i <= mid && j <= right - 1) {
            
           if (tmp[i] > tmp[j]) {
               array[k] = tmp[j];
               j++;
               k++;
           } else {
               array[k] = tmp[i];
               i++;
               k++;
           }

        }


        return array;
    }

    const sort = (array, low, high) => {
        if (low < high) {
            let mid = (low + high) / 2;

            sort(array, low, mid);
            sort(array, mid + 1, high);

            merge(array, low, mid + 1, high);
        }

        return array;
    };


    return { sort };
};

let fArr = [-5, 12, 4, 2, 1, 8, 9, 13] // [-5, 1, 2, 4, 8, 9, 12, 13]

let mSort = mergeSort();
console.log(mSort.sort(fArr, 0, fArr.length))


