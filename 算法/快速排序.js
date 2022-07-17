// 3 5 8 1 2 9 4 7 6
// 基准值 (pivot) 4

// 3 1 2    4       5 8 9 7 6

//  1 2  3  3      // 5  6  7   8  9

const arr = [3, 5, 8, 1, 2, 9, 4, 7, 6];

function quickSort(ary) {
    if (ary.length <= 1 ){
        return ary;
    }
    let left = [];
    let right = [];
    let pivot = ary.shift();

    for (let value of ary) {
        if (value > pivot) {
            right.push(value);
        } else {
            left.push(value);
        }
    }
    console.log(`quickSort(${left}).concat(${pivot}, quickSort(${right}))`)
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr))